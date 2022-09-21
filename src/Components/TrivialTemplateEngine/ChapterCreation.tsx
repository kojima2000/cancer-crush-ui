import { Stack, TextField ,DocumentCard, ActionButton, IIconProps} from "@fluentui/react";
import { useState } from "react";
import PageCreation from "./PageCreation";
import { Chapter, Page } from "./TrivialTemplateModel";

export default function ChapterCreation({chapters,printGameObject}:{chapters:Chapter[],printGameObject:any}){
    const [currentChapter, setcurrentChapter] = useState(0);

    function Icons(props:{pages:Page[]})
    {
        const PageIcon: IIconProps = { iconName: "documentData32Regular" };
        return (
            <Stack style={{display: "inline"}}>
            {props.pages.map((page:Page) =>
                <ActionButton iconProps={PageIcon}>{page.name?.slice(0,Math.max(page.name.length,20))}</ActionButton>
            )}
            </Stack>
        )
    }

    function ChapterCreationMenu(props:{ chapter:Chapter})
    {
        const [name,setName] = useState(props.chapter.name)
        
        return(
            <Stack>
                <TextField label="Name" defaultValue={name} onChange={(event:any) => 
                    {   printGameObject();
                        setName(event.target.value);
                    }}/>
                <TextField label="RenderingDebuging" defaultValue={name}/>
            </Stack>
        ) 
    }
    console.log(chapters[currentChapter].pages);
    return(
        <Stack>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md4" style={{minHeight:"100%"}}>
                    <DocumentCard>
                        <div><Icons pages={chapters[currentChapter].pages}/></div>
                        <div><ChapterCreationMenu chapter={chapters[currentChapter]}/></div>
                    </DocumentCard>
                </div>
                <div className="ms-Grid-col ms-sm12 ms-md8" style={{minHeight:"100%"}}>
                    <DocumentCard>
                        <PageCreation pages={chapters[currentChapter]? chapters[currentChapter].pages: []} printGameObject={printGameObject}/>
                    </DocumentCard>
                </div>
            </div>
        </Stack>
    )
}