import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchUserById, loseLife} from '../service';
import {IProfileShema, IStatisticsKeys, ITips} from '../types';

// Define the initial state using that type
const initialState: IProfileShema = {
    data: undefined,
    error: '',
    isLoading: false,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<IStatisticsKeys>) => {
            if(state.data && state.data.unused >= 1){
                if(state.data.stats[action.payload].value < 20){
                    state.data.stats[action.payload].value += 1
                    state.data.unused -= 1
                }
            }
        },
        decrement: (state, action: PayloadAction<IStatisticsKeys>) => {
            if(state.data && state.data.stats[action.payload].value > 0){
                state.data.stats[action.payload].value -= 1
                state.data.unused += 1
            }
        },
        loseLifeSlice: (state)=>{
            if(state?.data?.life){
                state.data.life = state.data.life - 1
            }
        },
        addLifeState: (state, action: PayloadAction<number>)=>{
            if(state.data && state?.data?.life <=0){
                state.data.life = action.payload
            }
        },
        deleteHelpState: (state, action: PayloadAction<ITips>)=>{
            if(state.data){
                state.data.tips = action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false
            state.error = ''
        })
        builder.addCase(fetchUserById.rejected, (state, action) => {
            state.error = action.error.message ?? ''
            state.isLoading = false
        })
    },
})

export const {
    decrement,
    increment,
    loseLifeSlice,
    addLifeState,
    deleteHelpState
} = profileSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default profileSlice.reducer