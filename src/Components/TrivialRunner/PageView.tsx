import { Text,Stack, DocumentCard, Checkbox, PrimaryButton, DefaultButton, Image, Position } from "@fluentui/react";
import { useEffect, useState } from "react";
import { choice, Page } from "../TrivialTemplateEngine/TrivialTemplateModel";

export default function PageView({page,nextPageCallback,prevPageCallback,pageButton}:{page:Page,nextPageCallback:any,prevPageCallback:any,pageButton:React.ReactNode})
{   
    const selectedAnswer=new Set<String>();

    function ChoiceView({choice,selectedAnswer}:{choice:choice,selectedAnswer:Set<String>})
    {
        const [userChoice,setUserChoice] = useState(false);
        return(
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
        )

    }
    page.backGroundImage="someflag";

    return(
        <Stack>
            <Text>{page.name}</Text>
            <DocumentCard style={{backgroundImage:"url('/Background1.svg')",width:720,height:500,mixBlendMode:"difference"}}>
                { page.question &&
                    <Stack>
                        <Stack>
                            <Text>name: {page.question.name}</Text>
                        </Stack>
                        <Stack>                
                            <Text>age: {page.question.age}</Text>
                        </Stack>
                        <Stack>
                            <Text>Description:
                                {page.question.description}</Text>
                        </Stack>
                        <Stack>
                            <Text>History: {page.question.history}</Text>
                        </Stack>
                        {   
                            page.question.choices.map((choice:choice)=>
                                <ChoiceView choice={choice} selectedAnswer={selectedAnswer}/>
                            )
                        }
                        <Stack style={{position:"absolute",bottom:0,left:0}}>
                            <DefaultButton text="Submit" onClick={nextPageCallback}/>                
                        </Stack>
                    </Stack>

                }
                { page.backGroundImage &&
                    <Image src='./Patient7.svg' style={{position:"absolute",bottom:0,right:0}}/>
                }
                {pageButton}
                <Image src='./Patient7.svg' style={{position:"absolute",bottom:0,right:0}}/>
            </DocumentCard>
            
        </Stack>
    )
}

