import { Text,Stack, DocumentCard, Checkbox, PrimaryButton, DefaultButton, Image, Position, shouldWrapFocus } from "@fluentui/react";
import { useEffect, useState } from "react";
import { choice, Page } from "../TrivialTemplateEngine/TrivialTemplateModel";

export default function PageView({page,nextPageCallback,prevPageCallback,pageButton}:{page:Page,nextPageCallback:any,prevPageCallback:any,pageButton:React.ReactNode})
{   
    const selectedAnswer=new Set<String>();
    const [SubmissionText,setSubmissionText]= useState(<Stack/>);
    useEffect(()=>
    {
        setSubmissionText(<Stack/>)
    },[page])
    function ChoiceView({choice,selectedAnswer}:{choice:choice,selectedAnswer:Set<String>})
    {
        const [userChoice,setUserChoice] = useState(false);
        return(
            <Stack style={{paddingTop:"5px"}}>
            <Checkbox 
            label={choice.description}
            checked={userChoice}
            onChange={() => {
                if(userChoice){
                    setUserChoice(false);
                    selectedAnswer.delete(choice.description)
                }
                else{
                    setUserChoice(true);
                    selectedAnswer.add(choice.description);
                }
                console.log(selectedAnswer);
            }}
            />
            </Stack>
        )

    }

    function submit()
    {
        if(selectedAnswer.size>0)
        {
            setSubmissionText(
            <Stack>
            <b/>
            <Text style={{borderRadius:"25px",border:"2px solid green"}}>{page.question?.correctAnswerText}</Text>
            </Stack>
            )
        }
        else{
            setSubmissionText(
                <Stack>
                <b/>
                <Text style={{borderRadius:"25px",border:"2px solid red"}}>{page.question?.wrongAnswerText}</Text>
                </Stack>
                )
        }
    }

    return(
        <Stack>
            <DocumentCard style={{paddingTop:"50px",paddingBottom:"50px",paddingRight:"50px",paddingLeft:"50px",width:720,height:500,mixBlendMode:"difference",backgroundImage:page.backGroundImage}}>
                <Stack>
                    <Text variant="xLarge">{page.name}</Text>
                    <Text variant="large">{page.description}</Text>
                </Stack>
                { page.question &&
                    <Stack>
                        <Stack>
                            <Text variant="large">
                                {page.question.description}</Text>
                        </Stack>
                        <Stack>
                            <Text variant="mediumPlus">History: {page.question.history}</Text>
                        </Stack>
                        {   
                            page.question.choices.map((choice:choice)=>
                                <ChoiceView choice={choice} selectedAnswer={selectedAnswer}/>
                            )
                        }
                        <Stack>
                            {SubmissionText}
                        </Stack>
                        <Stack style={{position:"absolute",bottom:0,left:0}}>
                            <DefaultButton style={{background:"none",border:"2px solid"}} text="Submit" onClick={()=>submit()}/>                
                        </Stack>
                    </Stack>

                }
                { page.backGroundImage &&
                    <Image src='./Patient%207.svg' style={{position:"absolute",bottom:0,right:0}}/>
                }
                {pageButton}
            </DocumentCard>
            
        </Stack>
    )
}

