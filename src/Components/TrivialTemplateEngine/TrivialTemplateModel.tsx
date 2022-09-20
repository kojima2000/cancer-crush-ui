
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
    questions: question[];
}

export interface question
{
    name: string | null;
    description: string;
    choices: choice[];
}
export interface choice
{   
    name: string | null;
    description: string;
    acceptedAnswer: boolean;
}