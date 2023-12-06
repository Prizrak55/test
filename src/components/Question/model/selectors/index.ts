import {IState} from '../../../../store/store';

export const getQuestion = (state: IState) => state.question.data
export const isLoading = (state: IState) => state.question.isLoading