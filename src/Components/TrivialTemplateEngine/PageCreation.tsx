import { ActionButton, CommandButton, IIconProps, Stack } from "@fluentui/react";
import { useEffect, useState } from "react";
import QuestionCreation from "./QuestionCreation";
import { Chapter, Page, Question } from "./TrivialTemplateModel";

export default function PageCreation({pages,printGameObject}:{pages:Page[],printGameObject:any}){
    const [currentPage, setCurrentPage] = useState(pages[0]);
    useEffect(()=>
    {
        setCurrentPage(pages[0]);
    },[pages])
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

        pages.push({});
        setCurrentPage(pages[pages.length-1]);
        printGameObject();
    }

    function QuestionForm({page}:{page:Page})
    {   
        const [currentQuestion,setCurrentQuestion] = useState(page?.question)
        function addQuestion(){
            printGameObject();
            page.question={
                age: 0,
                sex: "",
                history: "",
                description: "",
                choices: []
            }
            setCurrentQuestion(page.question);
        }
        if(currentQuestion)
        {
            return (
            <QuestionCreation question={currentQuestion} printGameObject={printGameObject} />
            )
        }
        else{
            return(
            <CommandButton iconProps={addIcon} text="Add Question" onClick={addQuestion}/>
            )
        }
    }
    const addIcon: IIconProps = { iconName: 'Add' };
    //removed key, add a uuid generator for key feature
    return(
        <Stack>
            <Icons pages={pages}/>
            <CommandButton iconProps={addIcon} text="New Page" onClick={createNewPage}/>
            <QuestionForm page={currentPage}/>
        </Stack>
    )
}