import {createAsyncThunk} from '@reduxjs/toolkit';
import {$api} from '../../../../store/axios';
import {IState} from '../../../../store/store';
import {addLifeState, deleteHelpState, loseLifeSlice} from '../slice/profile';
import {fetchQuestionById, qestionInited} from '../../../Question/model/service';
import {TNameTips} from '../types';
import {EtypeQuiz} from '../../../Question/model/types';

export const fetchUserById = createAsyncThunk(
    'profile/fetchByIdStatus',
    async () => {
        const response = await $api.get('/profile/1')
        return response.data
    }
)
export const saveSettings = createAsyncThunk(
    'profile/saveStatistic',
    async (_, thunkAPI) => {
        const oldSettings = await $api.get('/profile/1')
        const { dexterity, strength } = oldSettings.data.stats;
        console.log(oldSettings.data)
        const {getState} = thunkAPI
        const state = getState() as IState
        let data = state.profile.data

        if(data){
            const diffDexterity = data.stats.dexterity.value - dexterity.value
            const diffStrength = data.stats.strength.value - strength.value
            const lif  = data.life + Math.floor(diffDexterity / 5)
            data = {...data, life: lif}

            const a = Math.floor(Math.random() * 3);
            const num = Math.floor(diffStrength / 10)
            const mas = Object.keys(oldSettings.data.tips)[a]

            // @ts-ignore
            data = {...data, tips: {...data.tips, [mas]:{...data.tips[mas], value: data.tips[mas].value + num}}}
        }
        const response = await $api.put('/profile/1', data)
        thunkAPI.dispatch(fetchUserById())
        return response.data
    }
)

export const loseLife = createAsyncThunk(
    'profile/loseLife',
    async (_,thunkAPI) => {
        const state = thunkAPI.getState() as IState
        if(state?.profile?.data?.life){
            const profile = {...state.profile.data, life: state.profile.data.life - 1}
            const response = await $api.put('/profile/1', profile)
            thunkAPI.dispatch(loseLifeSlice())
            return response.data
        }
    }
)

export const addPointsAndInited = createAsyncThunk(
    'profile/addPoints',
    async (_,thunkAPI) => {
        const state = thunkAPI.getState() as IState
        if(state?.profile?.data){
            const profile = {...state.profile.data, unused: state.profile.data.unused + 3}
            const response = await $api.put('/profile/1', profile)
            thunkAPI.dispatch(qestionInited())
            if(state.question.data?.id){
                thunkAPI.dispatch(fetchQuestionById(Number(state.question.data?.id)))
            }
            return response.data
        }
    }
)

export const addLife = createAsyncThunk(
    'profile/addPoints',
    async (count: number, thunkAPI ) => {
        if(!isNaN(count)){
            const response = await $api.patch('/profile/1', {life: count})
            thunkAPI.dispatch(addLifeState(count))
            return response.data
        }
    }
)
export const usingHelp = createAsyncThunk(
    'profile/addPoints',
    async (help: TNameTips, thunkAPI ) => {
        const state = thunkAPI.getState() as IState
        const question = state.question.data
        const idQuestion = state.question.data?.id
        const data = state.profile.data?.tips
        if(data && data[help].value > 0){
            if(help === '50x50' && (EtypeQuiz.MANY_CHOICES ===  question?.type|| EtypeQuiz.CLASSIC ===  question?.type)){
                const falseItems = question.answers.filter(item=> !item.right).slice(2)
                const rightItems = question.answers.filter(item=> item.right)
                await $api.patch(`/questions/${idQuestion}`,{answers: [...falseItems,...rightItems]})
            }
            if(help === '75x25' && (EtypeQuiz.MANY_CHOICES ===  question?.type|| EtypeQuiz.CLASSIC ===  question?.type)){
                const falseItems = question.answers.filter(item=> !item.right).slice(1)
                const rightItems = question.answers.filter(item=> item.right)
                await $api.patch(`/questions/${idQuestion}`,{answers: [...falseItems,...rightItems]})
            }
            if(help === 'dimaHelp'){
                await $api.patch(`/questions/${idQuestion}`,{dimaHelp: true})
            }

            const lol = {...data}
            lol[help]={name: data[help].name, value: data[help].value - 1}
            const response = await $api.patch('/profile/1', {tips: lol})

            thunkAPI.dispatch(deleteHelpState(lol))
            thunkAPI.dispatch(fetchQuestionById(Number(idQuestion)))
            return response.data
        }
    }
)