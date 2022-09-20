import { Stack } from "@fluentui/react";
import { useState } from "react";
import ChapterComponent from "./ChapterComponent";
import { Chapter } from "./TrivialTemplateModel";

export default function ChapterCreation(){

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
            <div>{Chapters}</div>
            <div>{ChapterCreationMenu}</div>
        </Stack>
    )
}