import { Stack } from "@fluentui/react";
import TemplateForm from "./TemplateForm";
import { Page } from "./TrivialTemplateModel";

export default function PageCreation(props:{pages:Page[],printGameObject:any}){
    return(
        <Stack>
            {props.pages.map(function(page, i){
                return <TemplateForm page={page} key={i} printGameObject={props.printGameObject} />;
            })}
        </Stack>
    )
}