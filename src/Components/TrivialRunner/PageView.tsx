import { Text,Stack, DocumentCard, Checkbox, PrimaryButton, DefaultButton, Image } from "@fluentui/react";
import { useState } from "react";
import { choice, Page } from "../TrivialTemplateEngine/TrivialTemplateModel";

export default function PageView({page,nextPageCallback,prevPageCallback}:{page:Page,nextPageCallback:any,prevPageCallback:any})
{   

    function ChoiceView({choices}:{choices:choice[]})
    {
        const selectedAns = new Set<Number>();

        function selectAnswer(index:number)
        {
            if(selectedAns.has(index))
            {
                selectedAns.delete(index);
            }
            else{
                selectedAns.add(index);
            }
        }
        console.log("here",choices);
        if(choices)
        {
            return(
                <Stack className="ms-grid">
                {
                    choices.map((choice:choice,index:number)=>{
                        return(
                        <Stack className="ms-Grid-row">
                            <Checkbox 
                            label={choice.description}
                            checked={selectedAns.has(index)}
                            onChange={()=>selectAnswer(index)}
                            />
                        </Stack>
                        )
                    })
                }
                </Stack>
            )
        }
        return(
            <Stack>
                <Text>Error Question does not have any choices</Text>
            </Stack>
        )
    }
    page.backGroundImage="someflag";
    page.question=null;
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
                    <ChoiceView choices={page.question.choices}/>
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