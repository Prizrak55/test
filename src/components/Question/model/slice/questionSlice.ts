import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchQuestionById} from '../service';
import {EtypeQuiz, IQuestionShema} from '../types';
import {IStatisticsKeys, ITips} from '../../../Profile/model/types';


// Define the initial state using that type
const initialState: IQuestionShema = {
    data: undefined,
    error: '',
    isLoading: false,
}

export const questionSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        handleRight: (state, action: PayloadAction<boolean | null>) => {
            if(state.data){
                state.data.isRight = action.payload;
            }
        },
        handleChecked: (state, action: PayloadAction<number>) => {
            if(state.data && state.data.type === EtypeQuiz.MANY_CHOICES){
                state.data.answers[action.payload] = {
                    ...state.data.answers[action.payload],
                    checked: !state.data.answers[action.payload].checked
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestionById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchQuestionById.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false
            state.error = ''
        })
        builder.addCase(fetchQuestionById.rejected, (state, action) => {
            state.error = action.error.message ?? ''
            state.isLoading = false
        })
    },
})

export const { handleRight,handleChecked } = questionSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default questionSlice.reducer