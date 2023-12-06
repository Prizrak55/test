import {configureStore} from '@reduxjs/toolkit'
import {profileSlice} from '../components/Profile/model/slice/profile';
import {IProfileShema} from '../components/Profile';
import {IQuestionShema} from '../components/Question/model/types';
import {questionSlice} from '../components/Question/model/slice/questionSlice';

export interface IState {
    profile: IProfileShema;
    question: IQuestionShema;
}

export const store = configureStore({
    reducer: {
        profile: profileSlice.reducer,
        question: questionSlice.reducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch