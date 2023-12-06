import {createAsyncThunk} from '@reduxjs/toolkit';
import {$api} from '../../../../store/axios';
import {IState} from '../../../../store/store';
export const fetchQuestionById = createAsyncThunk(
    'question/fetchById',
    async (day: number) => {
        const response = await $api.get(`/questions/${day}`)
        return response.data
    }
)

export const qestionInited = createAsyncThunk(
    'question/qestionInited',
    async (_,thunkAPI) => {
        const {question:{data}} = thunkAPI.getState() as IState
        const response = await $api.patch(`/questions/${data?.id}`,{inited: true})
        return response.data
    }
)
