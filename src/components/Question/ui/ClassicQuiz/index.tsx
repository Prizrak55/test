import {IClassicAnswerQuiz} from '../../model/types';
import * as ST from './styled'
import Button from '../../../../shared/ui/Button';
import {COLORS_FOR_CARD_SHADOW, TRUE_ANSWER, WRONG_ANSWER} from '../../../../shared/constants';
import {useAppDispatch} from '../../../../hooks/hooks';
import {handleRight} from '../../model/slice/questionSlice';
import {addPointsAndInited, loseLife} from '../../../Profile/model/service';
export const ClassicQuiz = ({question}:{question: IClassicAnswerQuiz}) => {
    const {answers,isRight} = question;
    const dispatch = useAppDispatch()
    const colors = Object.keys(COLORS_FOR_CARD_SHADOW)
    const checkRight = (item: boolean) =>{
        dispatch(handleRight(item))
        if(!item){
            dispatch(loseLife())
        }else {
            dispatch(addPointsAndInited())
        }
    }
    return (
        <ST.Wrapper>
            {answers.map((item, index)=>{
                // if(isRight !== null){
                //     return <Button
                //         key={index}
                //         color={item.right ? TRUE_ANSWER : WRONG_ANSWER}
                //         onClick={console.log}
                //         width={'150px'}
                //         height={'100px'}
                //     >
                //         {item.answer}
                //     </Button>
                // }
                return <Button
                    key={index}
                    color={COLORS_FOR_CARD_SHADOW[colors[index]]}
                    onClick={()=>checkRight(item.right)}
                    width={'150px'}
                    height={'100px'}
                >
                    {item.answer}
                </Button>
            })}

        </ST.Wrapper>
    );
};
