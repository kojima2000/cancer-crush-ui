import { ActionButton, CommandButton, IIconProps, Stack } from "@fluentui/react";
import { useState } from "react";
import QuestionForm from "./TemplateForm";
import { Page } from "./TrivialTemplateModel";

export default function PageCreation({pages,printGameObject}:{pages:Page[],printGameObject:any}){
    const [currentPage, setCurrentPage] = useState(pages[0]);

    function Icons({pages}:{pages:Page[]})
    {
        const PageIcon: IIconProps = { iconName: "Document" };
        return (
            <Stack style={{display: "inline"}}>
            {pages.map((page:Page) =>
                <ActionButton iconProps={PageIcon}
                onClick={()=>setCurrentPage(page)}
                >{page.name?.slice(0,Math.max(page.name.length,20))}</ActionButton>
            )}
            </Stack>
        )
    }
    function createNewPage()
    {

        pages.push({description:"Fill out form",question:{
            age: 0,
            sex: "",
            history: "",
            description: "",
            choices: []
        
        }});
        setCurrentPage(pages[pages.length-1]);
        printGameObject();
    }

    function setPage()
    {
        
    }
    const addIcon: IIconProps = { iconName: 'Add' };
    //removed key, add a uuid generator for key feature
    return(
        <Stack>
            <Icons pages={pages}/>
            <CommandButton iconProps={addIcon} text="New Page" onClick={createNewPage}/>
            <div>{currentPage.description}</div>
            <QuestionForm question={currentPage.question} printGameObject={printGameObject} />;
        </Stack>
    )
}