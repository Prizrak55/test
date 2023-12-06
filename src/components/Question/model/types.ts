export enum EtypeQuiz {
    INPUT = 'INPUT',
    'MANY_CHOICES' = 'MANY_CHOICES',
    CLASSIC = 'CLASSIC'
}
interface Quiz {
    id: string;
    img?: string;
    question: string;
    afterDescription: string;
    help?: string[];
    inited: boolean;
    isRight: null | boolean;
    password: number;
    dimaHelp: boolean;
}
export interface IInputQuiz extends Quiz {
    right: string;
    type: EtypeQuiz.INPUT;
}

type TAnswersMany = {
    answer: string;
    right: boolean;
    checked: boolean;
    id: number;
}
export interface IManyChoicesQuiz extends Quiz {
    answers: TAnswersMany[]
    type: EtypeQuiz.MANY_CHOICES
}
type TAnswersClassic= {
    answer: string;
    right: boolean;
}
export interface IClassicAnswerQuiz extends Quiz {
    answers: TAnswersClassic[],
    type: EtypeQuiz.CLASSIC
}

export type IQuiz = IManyChoicesQuiz | IClassicAnswerQuiz | IInputQuiz

export interface IQuestionShema {
    isLoading: boolean,
    error?: string,
    data?: IQuiz
}