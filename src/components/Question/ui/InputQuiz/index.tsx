import {IInputQuiz} from '../../model/types';
import * as ST from './styled'
import Button from '../../../../shared/ui/Button';
import {BORDER_QUESTION} from '../../../../shared/constants';
import {useAppDispatch} from '../../../../hooks/hooks';
import {handleRight} from '../../model/slice/questionSlice';
import {Input} from '../../../../shared/ui/Input/styled';
import {ChangeEvent, useState} from 'react';
import {addPointsAndInited, loseLife} from '../../../Profile/model/service';

export const InputQuiz = ({question}:{question: IInputQuiz}) => {
    const [value, setValue] = useState('')
    const {right} = question;
    const dispatch = useAppDispatch()
    const  changeValue = (e: ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }
    const checkRight = () =>{
        dispatch(handleRight(right === value))
        if(right !== value){
            dispatch(loseLife())
        }else {
            dispatch(addPointsAndInited())
        }
    }
    return (
        <ST.Wrapper>
            <Input value={value} onChange={changeValue}/>
            <Button color={BORDER_QUESTION} onClick={checkRight}>Ответить</Button>
        </ST.Wrapper>
    );
};
