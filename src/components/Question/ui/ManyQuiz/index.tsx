import {IManyChoicesQuiz} from '../../model/types';
import * as ST from './styled'
import Button from '../../../../shared/ui/Button';
import {BORDER_QUESTION, COLORS_FOR_CARD_SHADOW, TRUE_ANSWER, WRONG_ANSWER} from '../../../../shared/constants';
import {useAppDispatch} from '../../../../hooks/hooks';
import {handleChecked, handleRight} from '../../model/slice/questionSlice';
import {FlexV} from '../../../../shared/ui/Flex';
import {Input} from '../../../../shared/ui/Input/styled';
import {addPointsAndInited, loseLife} from '../../../Profile/model/service';

export const ManyQuiz = ({question}:{question: IManyChoicesQuiz}) => {
    const {answers,isRight} = question;
    const dispatch = useAppDispatch()
    const colors = Object.keys(COLORS_FOR_CARD_SHADOW)
    const checkRight = () =>{
        let isRight = true
        answers.forEach(item=>{
            if(item.checked !== item.right){
                isRight = false
            }
        })
        dispatch(handleRight(isRight))
        if(!isRight){
            dispatch(loseLife())
        } else {
            dispatch(addPointsAndInited())
        }
    }
    const onCheck = (index: number) =>{
        dispatch(handleChecked(index))
    }


    return (
        <FlexV>
            {answers.map((item, index)=>{
                // if(isRight !== null){
                //     return <ST.Conteiner color={item.right ? TRUE_ANSWER : WRONG_ANSWER} key={index}>
                //         <Input
                //             type={'checkbox'}
                //             color={item.right ? TRUE_ANSWER : WRONG_ANSWER}
                //             checked={item.checked}
                //         />
                //         <p>{item.answer}</p>
                //     </ST.Conteiner>
                // }
                return <ST.Conteiner onClick={()=>onCheck(index)} color={COLORS_FOR_CARD_SHADOW[colors[index]]} key={index}>
                    <Input
                        type={'checkbox'}
                        checked={item.checked}
                        color={COLORS_FOR_CARD_SHADOW[colors[index]]}
                    />
                    <p>{item.answer}</p>
                </ST.Conteiner>
            })}

            <Button color={BORDER_QUESTION} onClick={checkRight}>Ответить</Button>
        </FlexV>
    );
};
