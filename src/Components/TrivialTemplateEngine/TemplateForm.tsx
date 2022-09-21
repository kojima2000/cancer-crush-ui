import { Checkbox, DefaultButton, getPropsWithDefaults, Stack, TextField } from "@fluentui/react";
import { useState } from "react";
import { Page } from "./TrivialTemplateModel";


export default function TemplateForm({ page, printGameObject }: {page: Page,printGameObject:any}){
    const [age, setAge] = useState(page.question?.age);
    const [sex, setSex] = useState(page.question?.sex);
    const [history, setHistory] = useState(page.question?.history);
    const [question, setQuestion] = useState(page.question?.description);
    const [caseStudies, setCaseStudies] = useState(page.question?.caseStudies);
    const [choices, setChoices] = useState(page.question?.choices);
    const [newChoiceDescription, setNewChoiceDescription] = useState("");

    const onChangeAge = (val: number) => {
        if(page.question)
        {
        page.question.age = val;
        setAge(val);
        }
    }

    const onChangeSex = (val: string) => {
        if(page.question)
        {
        page.question.sex = val;
        setSex(val);
        }
    }

    const onChangeHistory = (val: string) => {
        if(page.question)
        {
        page.question.history = val;
        setHistory(val);
        }
    }

    const onChangeQuestion = (val: string) => {
        if(page.question)
        {
        setQuestion(val);
        page.question.description = val;
        }
    }

    const onChangeCaseStudies = (val: string) => {
        if(page.question)
        {
        page.question.caseStudies = val;
        setCaseStudies(val);
        }
    }

    const onChangeChoice = (val: string, idx: number) => {
        if(choices)
        {
        choices[idx].description = val;
        setChoices([...choices]);
        }
    }

    const onRemoveChoice = (idx: number) => {
        if(choices)
        {
        for(let i = 0; i < choices.length; i++){ 
            if (idx === i) { 
                choices.splice(i, 1); 
                break;
            }
        }
        if(page.question)
            {
            page.question.choices = choices;
            setChoices([...choices]);
            }
        }
    }

    const onAddChoice = () => {
        if(choices)
        {
        choices.push({
            description: newChoiceDescription,
            acceptedAnswer: false
        });
        if(page.question)
        {
        page.question.choices = choices;
        setNewChoiceDescription("");
        setChoices([...choices]);
        }
        }
    }

    const onSetCorrectAnswer = (idx: number) => {
        if(choices)
        {
        for (let i = 0; i < choices.length; i++) {
            choices[i].acceptedAnswer = idx === i;
        }

        setChoices([...choices]);
        }
    }

    return(
        <Stack style={{ padding: '20px' }} className="ms-Grid">
            <div>{page.description}</div>
            <div className="ms-Grid-row">
                <TextField 
                    label="Patient age" 
                    
                    value={age?.toString()} 
                    onChange={(_e, value) => onChangeAge(Number(value))}
                />
            </div>
            <div className="ms-Grid-row">
                <TextField 
                    label="Patient sex"
                    
                    value={sex}
                    onChange={(_e, value) => onChangeSex(value || '')}
                />
            </div>
            <div className="ms-Grid-row">
                <TextField 
                    label="Patient history" 
                    multiline 
                    
                    value={history}
                    onChange={(_e, value) => onChangeHistory(value || '')}
                />
            </div>
            <div className="ms-Grid-row">
                <TextField 
                    label="Question" 
                    multiline 
                    
                    value={question}
                    onChange={(_e, value) => onChangeQuestion(value || '')}
                />
            </div>
            {
                choices?.map(function(choice, i){
                    return (<Stack horizontal key={i}>
                        <Stack.Item>
                            <TextField 
                                label={`Choice #${i + 1}`}
                                value={choice.description}
                                onChange={(_e, value) => {
                                    onChangeChoice(value || '', i);
                                    printGameObject();
                                }}
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
                <Stack.Item>
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
                    
                    value={caseStudies}
                    onChange={(_e, value) => onChangeCaseStudies(value || '')}
                />
            </div>
        </Stack>
    )
}