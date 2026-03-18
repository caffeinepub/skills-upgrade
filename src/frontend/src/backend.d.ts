import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BilingualText {
    en: string;
    hi: string;
}
export interface QuizQuestion {
    question: BilingualText;
    answerAEI: BilingualText;
    answerBEI: BilingualText;
    answerA: BilingualText;
    answerB: BilingualText;
    answerAJPL: BilingualText;
    answerASNL: BilingualText;
    answerATFL: BilingualText;
    answerBJPL: BilingualText;
    answerBSNL: BilingualText;
    answerBTFL: BilingualText;
}
export interface PersonalityType {
    weaknesses: Array<BilingualText>;
    strengths: Array<BilingualText>;
    code: string;
    name: BilingualText;
    negative: Array<BilingualText>;
    description: BilingualText;
    likes: Array<BilingualText>;
    balanceTips: BilingualText;
    positive: Array<BilingualText>;
    dislikes: Array<BilingualText>;
}
export interface backendInterface {
    getAllPersonalityTypes(): Promise<Array<PersonalityType>>;
    getAllQuizQuestions(): Promise<Array<QuizQuestion>>;
    getPersonalityType(code: string): Promise<PersonalityType>;
    initialize(): Promise<void>;
}
