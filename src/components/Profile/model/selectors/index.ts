import {IState} from '../../../../store/store';

export const getProfile = (state: IState) => state.profile.data
export const getIsLoading = (state: IState) => state.profile.isLoading
export const getError = (state: IState) => state.profile.error