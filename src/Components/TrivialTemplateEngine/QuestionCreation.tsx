import { Checkbox, DefaultButton, getPropsWithDefaults, Stack, TextField } from "@fluentui/react";
import { useEffect, useState } from "react";
import { choice, Question } from "./TrivialTemplateModel";


export default function QuestionCreation({ question, printGameObject }: {question: Question,printGameObject:any}){
    console.log(question,"render");
    const [age, setAge] = useState(question.age);
    const [sex, setSex] = useState(question.sex);
    const [history, setHistory] = useState(question.history);
    const [questionDescription, setQuestionDescription] = useState(question.description);
    const [caseStudies, setCaseStudies] = useState(question?.caseStudies);
    const [choices, setChoices] = useState(question.choices);
    const [newChoiceDescription, setNewChoiceDescription] = useState("");
    useEffect(()=>
    {
        setAge(question.age);
        setSex(question.sex);
        setHistory(question.history);
        setQuestionDescription(question.description);
        setCaseStudies(question?.caseStudies);
        setChoices(question.choices);
        setNewChoiceDescription("");
    },[question])
    const onChangeAge = (val: number) => {
        question.age = val;
        setAge(val);
    }

    const onChangeSex = (val: string) => {
        question.sex = val;
        setSex(val);

    }

    const onChangeHistory = (val: string) => {

        question.history = val;
        setHistory(val);

    }

    const onChangeQuestion = (val: string) => {

        setQuestionDescription(val);
        question.description = val;

    }

    const onChangeCaseStudies = (val: string) => {

        question.caseStudies = val;
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

        question.choices = choices;
        setChoices([...choices]);

    }

    const onAddChoice = () => {

        choices.push({
            description: newChoiceDescription,
            acceptedAnswer: false
        });

        question.choices = choices;
        setNewChoiceDescription("");
        setChoices([...choices]);

    }

    const onSetCorrectAnswer = (idx: number) => {

        for (let i = 0; i < choices.length; i++) {
            choices[i].acceptedAnswer = idx === i;
        }

        setChoices([...choices]);

    }
    console.log(age,question.age,sex);
    return(
        <Stack style={{ padding: '20px' }} className="ms-Grid">
            <div className="ms-Grid-row">
                <TextField 
                    label="Patient age" 
                    
                    value={age.toString()} 
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
                    
                    value={questionDescription}
                    onChange={(_e, value) => onChangeQuestion(value || '')}
                />
            </div>
            {
                choices?.map(function(choice:choice, i:number){
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