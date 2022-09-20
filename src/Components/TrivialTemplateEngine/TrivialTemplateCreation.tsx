import { Stack } from "@fluentui/react";
import ChapterCreation from "./ChapterCreation";
import { TrivialTemplateModel } from "./TrivialTemplateModel";

export default function TrivialTemplateCreation(props:{gameObj:TrivialTemplateModel}){

    let gameObj = props.gameObj;

    return(
        <Stack>
            <div className="ms-Grid" dir="ltr">
                <ChapterCreation chapters={[]}/>
            </div>
        </Stack>
    )
}