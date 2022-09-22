import { IIconProps, Stack } from "@fluentui/react";
import { useState } from "react";
import { Chapter } from "../TrivialTemplateEngine/TrivialTemplateModel";
import { IconButton } from '@fluentui/react/lib/Button';
import PageView from "./PageView";

export default function QuestionSetRunner({chapters,done}:{chapters:Chapter,done:any})
{
    const [currentPage,setCurrentPage]=useState(0);
    const nextIcon: IIconProps = { iconName: 'next' };
    const prevIcon: IIconProps = { iconName: 'previous' };

    function NextPage()
    {
        setCurrentPage(Math.min(chapters.pages.length-1,currentPage+1));
    }
    function PrevPage()
    {
        setCurrentPage(Math.max(0,currentPage-1));
    }
    return(
        <Stack>
            <PageView page={chapters.pages[currentPage]} nextPageCallback={NextPage} prevPageCallback={PrevPage}></PageView>
            <Stack style={{display:"inline",textAlign: "center"}}>
                {currentPage>0 &&
                 <IconButton iconProps={prevIcon} onClick={PrevPage}/>
                }
                {currentPage<chapters.pages.length-1 &&
                <IconButton iconProps={nextIcon} onClick={NextPage}/>
                }
            </Stack>            
        </Stack>
    )
}