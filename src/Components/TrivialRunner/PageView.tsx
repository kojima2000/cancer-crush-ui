import { Text,Stack, DocumentCard, Checkbox, PrimaryButton, DefaultButton, Image } from "@fluentui/react";
import { useEffect, useState } from "react";
import { choice, Page } from "../TrivialTemplateEngine/TrivialTemplateModel";

export default function PageView({page,nextPageCallback,prevPageCallback}:{page:Page,nextPageCallback:any,prevPageCallback:any})
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
            {page.question &&
            <DocumentCard>
                { page.backGroundImage &&
                  <Image src='https://fabricweb.azureedge.net/fabric-website/placeholders/350x150.png'/>
                }
                { page.question &&
                    <Stack>
                    <Stack>
                        <Text>name: {page.question.name}</Text>
                    </Stack>
                    <Stack>                
                        <Text>age: {page.question.age}</Text>
                    </Stack>
                    <DocumentCard>
                        <Stack>
                            <Text>Description:
                                {page.question.description}</Text>
                        </Stack>
                        <Stack>
                            <Text>History: {page.question.history}</Text>
                        </Stack>
                    </DocumentCard>
                    {console.log(page.question.choices)}
                    {   
                        page.question.choices.map((choice:choice)=>
                            <ChoiceView choice={choice} selectedAnswer={selectedAnswer}/>
                        )
                    }
                    <Stack style={{textAlign: "right"}}>
                        <DefaultButton text="Submit" onClick={nextPageCallback}/>                
                    </Stack>
                    </Stack>
                }
            </DocumentCard>
            }
        </Stack>
    )
}

/**                <Text>{page.question.choices}</Text>
                <Text>{page.question.description}</Text>
                <Text>{page.question.history}</Text>
                <Text>{page.question.age}</Text> */