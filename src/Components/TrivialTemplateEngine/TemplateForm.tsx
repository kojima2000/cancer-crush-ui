import { Checkbox, DefaultButton, Stack, TextField } from "@fluentui/react";
import { useState } from "react";
import { Page } from "./TrivialTemplateModel";


export default function TemplateForm({ page }: {page: Page}){
    const [age, setAge] = useState(page.question.age);
    const [sex, setSex] = useState(page.question.sex);
    const [history, setHistory] = useState(page.question.history);
    const [question, setQuestion] = useState(page.question.description);
    const [caseStudies, setCaseStudies] = useState(page.question.caseStudies);
    const [choices, setChoices] = useState(page.question.choices);
    const [newChoiceDescription, setNewChoiceDescription] = useState("");

    const onChangeAge = (val: number) => {
        page.question.age = val;
        setAge(val);
    }

    const onChangeSex = (val: string) => {
        page.question.sex = val;
        setSex(val);
    }

    const onChangeHistory = (val: string) => {
        page.question.history = val;
        setHistory(val);
    }

    const onChangeQuestion = (val: string) => {
        setQuestion(val);
        page.question.description = val;
    }

    const onChangeCaseStudies = (val: string) => {
        page.question.caseStudies = val;
        setCaseStudies(val);
    }

    const onChangeChoice = (val: string, idx: number) => {
        choices[idx].description = val;
        setChoices([...choices]);
    }

    const onRemoveChoice = (idx: number) => {
        for(let i = 0; i < choices.length; i++){ 
            if (idx === i) { 
                choices.splice(i, 1); 
                break;
            }
        }
        page.question.choices = choices;
        setChoices([...choices]);
    }

    const onAddChoice = () => {
        choices.push({
            description: newChoiceDescription,
            acceptedAnswer: false
        });
        page.question.choices = choices;
        setNewChoiceDescription("");
        setChoices([...choices]);
    }

    const onSetCorrectAnswer = (idx: number) => {
        for (let i = 0; i < choices.length; i++) {
            choices[i].acceptedAnswer = idx === i;
        }

        setChoices([...choices]);
    }

    console.log(page)
    return(
        <Stack style={{ padding: '20px' }} className="ms-Grid">
            <div>{page.description}</div>
            <div className="ms-Grid-row">
                <TextField 
                    label="Patient age" 
                    className="ms-Grid-col ms-sm12 ms-md6 ms-lg4" 
                    value={age.toString()} 
                    onChange={(_e, value) => onChangeAge(Number(value))}
                />
            </div>
            <div className="ms-Grid-row">
                <TextField 
                    label="Patient sex"
                    className="ms-Grid-col ms-sm12 ms-md6 ms-lg4"
                    value={sex}
                    onChange={(_e, value) => onChangeSex(value || '')}
                />
            </div>
            <div className="ms-Grid-row">
                <TextField 
                    label="Patient history" 
                    multiline 
                    className="ms-Grid-col ms-sm12 ms-md6 ms-lg4"
                    value={history}
                    onChange={(_e, value) => onChangeHistory(value || '')}
                />
            </div>
            <div className="ms-Grid-row">
                <TextField 
                    label="Question" 
                    multiline 
                    className="ms-Grid-col ms-sm12 ms-md6 ms-lg4"
                    value={question}
                    onChange={(_e, value) => onChangeQuestion(value || '')}
                />
            </div>
            {
                choices.map(function(choice, i){
                    return (<Stack horizontal key={i}>
                        <Stack.Item className="ms-sm12 ms-md6 ms-lg4">
                            <TextField 
                                label={`Choice #${i + 1}`}
                                value={choice.description}
                                onChange={(_e, value) => onChangeChoice(value || '', i)}
                            />
                        </Stack.Item>
                        <Stack.Item align="end" style={{ paddingLeft: '10px' }}>
                            <DefaultButton 
                                text="Remove" 
                                primary
                                onClick={() => onRemoveChoice(i)}
                            />
                        </Stack.Item>
                        <Stack.Item align="end" style={{ paddingLeft: '10px' }}>
                            <Checkbox 
                                label="Correct answer"
                                checked={choice.acceptedAnswer}
                                onChange={() => onSetCorrectAnswer(i)}
                            />
                        </Stack.Item>
                    </Stack>)
                })
            }
            <Stack horizontal>
                <Stack.Item className="ms-sm12 ms-md6 ms-lg4">
                    <TextField 
                        label={`New choice`}
                        value={newChoiceDescription}
                        onChange={(_e, value) => setNewChoiceDescription(value || '')}
                    />
                </Stack.Item>
                <Stack.Item align="end" style={{ paddingLeft: '10px' }}>
                    <DefaultButton 
                        text="Add" 
                        primary
                        onClick={() => onAddChoice()}
                    />
                </Stack.Item>
            </Stack>
            <div className="ms-Grid-row">
                <TextField 
                    label="Trials and case studies" 
                    multiline 
                    className="ms-Grid-col ms-sm12 ms-md6 ms-lg4"
                    value={caseStudies}
                    onChange={(_e, value) => onChangeCaseStudies(value || '')}
                />
            </div>
        </Stack>
    )
}