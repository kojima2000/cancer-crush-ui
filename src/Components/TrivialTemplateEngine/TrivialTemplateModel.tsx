
export interface TrivialTemplateModel{
    name: string;
    chapters: Chapter[];

}

export interface Chapter
{
    name: string;
    pages: Page[];
}

export interface Page
{
    name: string;
    backGroundImage: File|String;
    questions: string;
    choices: choice[];
}

export interface choice
{   
    name: string;
    description: string;
    acceptedAnswer: boolean;
}