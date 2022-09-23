import { Text,Stack, DocumentCard, Checkbox, DefaultButton, Image, Modal, IconButton, IIconProps } from "@fluentui/react";
import { useEffect, useState } from "react";
import { useBoolean } from "@fluentui/react-hooks"
import { choice, Page } from "../TrivialTemplateEngine/TrivialTemplateModel";

export default function PageView({page,nextPageCallback,prevPageCallback,pageButton}:{page:Page,nextPageCallback:any,prevPageCallback:any,pageButton:React.ReactNode})
{   
    const selectedAnswer=new Set<String>();
    const [SubmissionText,setSubmissionText]= useState(<Stack/>);
    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
    const questionMarkIcon: IIconProps = { iconName: 'FeedbackRequestSolid' };

    useEffect(()=>
    {   console.log("working");
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
        function checkAnswer()
        {
            let correctAnswer=true
            let acceptedAnswerSet=new Set<String>();
            if(page.question){
                for(let index=0;index<page.question.choices.length;index++)
                {
                    if(page.question.choices[index].acceptedAnswer)
                    {
                        acceptedAnswerSet.add(page.question.choices[index].description)
                    }
                }
                }
            console.log(acceptedAnswerSet,selectedAnswer);
            selectedAnswer.forEach((key)=>{
                if(!acceptedAnswerSet.has(key)){
                    correctAnswer=false
                    console.log("4")
                    return
                }
            })
            console.log("e")
            return correctAnswer;
        }
        if(checkAnswer())
        {
            setSubmissionText(
            <Stack>
            <b/>
            <Text style={{top:"35%",position:"absolute",padding:"5px",borderRadius:"25px",border:"2px solid green",backgroundColor:"white"}}>{page.question?.correctAnswerText}</Text>
            </Stack>
            )
        }
        else{
            setSubmissionText(
                <Stack>
                <b/>
                <Text style={{top:"35%",position:"absolute",backgroundColor:"white",padding:"5px",borderRadius:"25px",border:"2px solid red"}}>{page.question?.wrongAnswerText}</Text>
                </Stack>
                )
        }
    }
    console.log(page.additionalDetail)
    return(
        <Stack>
            <DocumentCard style={{padding:"50px",width:900,height:500,mixBlendMode:"difference",backgroundImage:page.backGroundImage}}>
                <Stack>
                    { page.additionalDetail &&
                        <Stack>
                        <Stack style={{position:"absolute",top:0,right:0}}>
                            <IconButton iconProps={questionMarkIcon} onClick={showModal} />
                        </Stack>
                        <Stack>
                            <Modal 
                            isOpen={isModalOpen}
                            onDismiss={hideModal}>
                            {page.additionalDetail}
                            </Modal>
                        </Stack>
                        </Stack>
                    }
                    <Text variant="xLarge">{page.name}</Text>
                    <Text variant="large">{page.description}</Text>
                </Stack>
                { page.question &&
                    <Stack>
                        <DocumentCard style={{height:"250px",overflow:"scroll",padding:"5px",borderRadius:"20px"}}>
                            <Stack>
                                <Text variant="mediumPlus">{page.question.history}</Text>
                            </Stack>
                            <Stack>
                                <Text variant="large">
                                    {page.question.description}
                                </Text>
                            </Stack>
                        </DocumentCard>
                        {   
                            page.question.choices.map((choice:choice)=>
                                <ChoiceView choice={choice} selectedAnswer={selectedAnswer}/>
                            )
                        }
                        <Stack style={{position:"absolute",bottom:0,left:0}}>
                            <DefaultButton style={{backgroundImage:"url(./Submit%20button.svg)"}} text="Submit" onClick={()=>submit()}/>                
                        </Stack>
                    </Stack>

                }
                { page.backgroundImagePeople &&
                    <Image src={page.backgroundImagePeople} style={{position:"absolute",bottom:0,right:0}}/>
                }
                {pageButton}
                <Stack>
                    {SubmissionText}
                </Stack>
            </DocumentCard>
            
        </Stack>
    )
}

