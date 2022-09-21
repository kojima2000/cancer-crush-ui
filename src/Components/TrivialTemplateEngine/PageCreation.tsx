import { Stack } from "@fluentui/react";
import TemplateForm from "./TemplateForm";
import { Page } from "./TrivialTemplateModel";

export default function PageCreation({pages,printGameObject}:{pages:Page[],printGameObject:any}){
    return(
        <Stack>
            {pages.map(function(page, i){
                return <TemplateForm page={page} key={i} printGameObject={printGameObject} />;
            })}
        </Stack>
    )
}