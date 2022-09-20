import { Stack } from "@fluentui/react";
import PageCreation from "./PageCreation";
import ChapterCreation from "./ChapterCreation";
export default function TrivialTemplateCreation(){

    return(
        <Stack>
            <div className="ms-Grid">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <div className="LayoutPage-demoBlock"><PageCreation/></div>
                </div>
                <div className="ms-Grid-col ms-md6 ms-lg8">
                <div className="LayoutPage-demoBlock"><ChapterCreation/></div>
                </div>
            </div>
            </div>
        </Stack>
    )
}