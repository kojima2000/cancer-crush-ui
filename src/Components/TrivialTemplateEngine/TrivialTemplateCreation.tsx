import { Stack,Text } from "@fluentui/react";
import ChapterCreation from "./ChapterCreation";
import { TrivialTemplateModel } from "./TrivialTemplateModel";

export default function TrivialTemplateCreation(props:{gameObj:TrivialTemplateModel}){
    let temp={
        name:"Trivial Template",
        chapters:[{
        name:"testeeeeee",
        pages:[
        {
        description: 'Submit a quiz question',

        question: {

            age: 0,

            sex: "",

            history: "",

            description: "",

            choices: [{

                description: "",

                acceptedAnswer: false

            },{

                description: "",

                acceptedAnswer: false

            },{

                description: "",

                acceptedAnswer: false

            },{

                description: "",

                acceptedAnswer: false

            }],

            caseStudies: ""

        }
        }]}
    ]};

    function Title({title}:{title:string})
    {
        return(
            <Stack>
                <Text variant="large">
                {title}
                </Text>
            </Stack>
        )
    }
    function printGameObject()
    {
        console.log(JSON.stringify(temp));
    }
    console.log(JSON.stringify(temp));
    return(
        <Stack>
            <Stack className="ms-Grid" dir="ltr">
                <Stack>
                    {<Title title={temp.name}/>}
                </Stack>
                <ChapterCreation chapters={temp.chapters} printGameObject={printGameObject}/>
            </Stack>
        </Stack>
    )
}