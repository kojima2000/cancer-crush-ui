import { Stack } from "@fluentui/react";
import { useState } from "react";
import ChapterComponent from "./ChapterComponent";
import PageCreation from "./PageCreation";
import { Chapter } from "./TrivialTemplateModel";

export default function ChapterCreation(props:{chapters:Chapter[]}){

    const [Chapters, setChapter] = useState([ChapterComponent()]);


    function ChapterCreationMenu(activeSelection: Chapter)
    {
        return(
            <Stack>
                {activeSelection}
            </Stack>
        ) 
    }
    return(
        <Stack>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                    <div className="LayoutPage-demoBlock">
                        <div>{Chapters}</div>
                        <div>{ChapterCreationMenu}</div>
                    </div>
                </div>
                <div className="ms-Grid-col ms-md6 ms-lg8">
                    <div className="LayoutPage-demoBlock">
                        <PageCreation pages={[]}/>
                    </div>
                </div>
            </div>
        </Stack>
    )
}