
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
    //todo check on the optionality of this afterwards
    name?: string;
    backGroundImage?: File|String;
    description?: string,
    question: Question;
}

export interface Question
{
    name?: string | null;
    age: number;
    sex: string;
    history: string;
    description: string; // this is for question
    choices: choice[];
    caseStudies?: string;
}
export interface choice
{   
    name?: string | null;
    description: string;
    acceptedAnswer: boolean;
}