
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
    backGroundImage?: string;
    backGroundImageBinary?: File | BinaryData,
    description?: string,
    question?: Question;
    additionalDetail?: string
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
    correctAnswerText?: string;
    wrongAnswerText?: string;
    submitButtonBackGroundImage?: string
    submitButtonBackGroundImageBinary?: File | BinaryData
}
export interface choice
{   
    name?: string | null;
    description: string;
    acceptedAnswer: boolean;
}