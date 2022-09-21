import { Stack, TextField ,DocumentCard, ActionButton, IIconProps, CommandButton} from "@fluentui/react";
import { useState } from "react";
import PageCreation from "./PageCreation";
import { Chapter, Page } from "./TrivialTemplateModel";

export default function ChapterCreation({chapters,printGameObject}:{chapters:Chapter[],printGameObject:any}){
    const [currentChapter, setcurrentChapter] = useState(chapters[0]);

    function Icons({chapters}:{chapters:Chapter[]})
    {
        const PageIcon: IIconProps = { iconName: "Document" };
        return (
            <Stack style={{display: "inline"}}>
            {chapters.map((chapter:Chapter) =>
                <ActionButton iconProps={PageIcon}
                onClick={()=>setcurrentChapter(chapter)}
                >{chapter.name?.slice(0,Math.max(chapter.name.length,20))}</ActionButton>
            )}
            </Stack>
        )
    }

    function createNewChapter()
    {
        chapters.push({name:"",pages:[]});
        setcurrentChapter(chapters[chapters.length-1]);
        printGameObject();
    }
    function ChapterCreationMenu({chapter}:{ chapter:Chapter})
    {
        const [name,setName] = useState(chapter.name)
        return(
            <Stack>
                <TextField label="Name" defaultValue={name} onChange={(event:any) => 
                    {   printGameObject();
                        setName(event.target.value);
                        chapter.name=event.target.value;
                    }}/>
            </Stack>
        ) 
    }
    console.log(currentChapter?.pages);
    const addIcon: IIconProps = { iconName: 'Add' };
    return(
        <Stack>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md4" style={{minHeight:"100%"}}>
                    <DocumentCard>
                        <div><Icons chapters={chapters}/></div>
                        <CommandButton iconProps={addIcon} text="New Question Set" onClick={createNewChapter}/>
                        <div><ChapterCreationMenu chapter={currentChapter}/></div>
                    </DocumentCard>
                </div>
                <div className="ms-Grid-col ms-sm12 ms-md8" style={{minHeight:"100%"}}>
                    <DocumentCard>
                        <PageCreation pages={currentChapter? currentChapter.pages: []} printGameObject={printGameObject}/>
                    </DocumentCard>
                </div>
            </div>
        </Stack>
    )
}