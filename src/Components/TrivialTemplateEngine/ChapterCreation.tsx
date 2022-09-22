import { Stack, TextField ,DocumentCard, ActionButton, IIconProps, CommandButton} from "@fluentui/react";
import { useEffect, useState } from "react";
import PageCreation from "./PageCreation";
import { Chapter, Page } from "./TrivialTemplateModel";

export default function ChapterCreation({chapters,printGameObject}:{chapters:Chapter[],printGameObject:any}){
    const [currentChapter, setCurrentChapter] = useState(chapters[0]);
    function Icon({chapter}:{chapter:Chapter})
    {
        const [chapterName,setChapterName] = useState(chapter.name);
        useEffect(()=>{
            setChapterName(chapter.name?.slice(0,Math.min(chapter.name.length,20)));
        },[chapter])
        const PageIcon: IIconProps = { iconName: "Document" };
        
        return (
                <ActionButton iconProps={PageIcon}
                onClick={()=>setCurrentChapter(chapter)}
                >{chapterName}</ActionButton>
        )
    }

    function createNewChapter()
    {
        chapters.push({name:"",pages:[]});
        setCurrentChapter(chapters[chapters.length-1]);
        printGameObject();
    }
    function ChapterCreationMenu({chapter}:{ chapter:Chapter})
    {
        const [name,setName] = useState(chapter.name)
        return(
            <Stack>
                <TextField label="Name" defaultValue={name} onChange={(event:any) => 
                    {   
                        printGameObject();
                        setName(event.target.value);
                        chapter.name=event.target.value;
                    }}/>
            </Stack>
        ) 
    }

    const addIcon: IIconProps = { iconName: 'Add' };
    return(
        <Stack>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md4" style={{minHeight:"100%"}}>
                    <DocumentCard>
                        <Stack style={{display: "inline"}}>
                            { chapters.map((chapter)=>{
                                return(<Icon chapter={chapter}></Icon>)
                            })}
                        </Stack>
                        <CommandButton iconProps={addIcon} text="New Question Set" onClick={createNewChapter}/>
                        <Stack><ChapterCreationMenu chapter={currentChapter}/></Stack>
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