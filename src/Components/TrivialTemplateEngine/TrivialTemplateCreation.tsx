import { Stack } from "@fluentui/react";
import ChapterCreation from "./ChapterCreation";
import { TrivialTemplateModel } from "./TrivialTemplateModel";

export default function TrivialTemplateCreation(props:{gameObj:TrivialTemplateModel}){
    let temp={
        name:"intialTemplate",
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
    function printGameObject()
    {
        console.log(JSON.stringify(temp));
    }
    console.log(JSON.stringify(temp));
    return(
        <Stack>
            <div className="ms-Grid" dir="ltr">
                <ChapterCreation chapters={temp.chapters} printGameObject={printGameObject}/>
            </div>
        </Stack>
    )
}