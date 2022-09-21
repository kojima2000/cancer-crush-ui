import { Stack } from "@fluentui/react";
import { useState } from "react";
import { TrivialTemplateModel } from "../TrivialTemplateEngine/TrivialTemplateModel";
import QuestionSetRunner from "./QuestionSetRunner";

export default function TrivialRunner({trivialTemplateModel}:{trivialTemplateModel:TrivialTemplateModel})
{
    const [CurrentQuestionSet,setCurrentQuestionSet]=useState(0);
    const allQuestionAnwser=trivialTemplateModel.chapters[CurrentQuestionSet];
    function completedQuestionSet()
    {

    }
    return(
        <Stack>
            {<QuestionSetRunner chapters={trivialTemplateModel.chapters[CurrentQuestionSet]} done={completedQuestionSet}/>}
        </Stack>
    )
}