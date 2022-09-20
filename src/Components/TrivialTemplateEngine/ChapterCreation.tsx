import { Stack, TextField ,DocumentCard, ActionButton, IIconProps} from "@fluentui/react";
import { useState } from "react";
import PageCreation from "./PageCreation";
import { Chapter, Page } from "./TrivialTemplateModel";

export default function ChapterCreation(props:{chapters:Chapter[]}){

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
                <TextField label="Name" defaultValue={name} onChange={(event:any) => setName(event.target.value)}/>
                <TextField label="RenderingDebuging" defaultValue={name}/>
            </Stack>
        ) 
    }
    return(
        <Stack>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md4" style={{minHeight:"100%"}}>
                    <DocumentCard>
                        <div><Icons pages={[{name:"test1"},{name:"test2"},{name:"test3"}]}/></div>
                        <div><ChapterCreationMenu chapter={{name:"someNameImadeup",pages: [{}]}}/></div>
                    </DocumentCard>
                </div>
                <div className="ms-Grid-col ms-sm12 ms-md8" style={{minHeight:"100%"}}>
                    <DocumentCard>
                        <PageCreation pages={props.chapters[currentChapter]? props.chapters[currentChapter].pages: []}/>
                    </DocumentCard>
                </div>
            </div>
        </Stack>
    )
}