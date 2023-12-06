import {EtypeQuiz} from '../model/types';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import {getQuestion} from '../model/selectors';
import {useEffect} from 'react';
import {fetchQuestionById} from '../model/service';
import {ClassicQuiz} from './ClassicQuiz';
import {InputQuiz} from './InputQuiz';
import {ManyQuiz} from './ManyQuiz';
import dayjs from 'dayjs';
import {Alert} from '../../../shared/ui/Alert';
import * as ST from './styled'
import {handleRight} from '../model/slice/questionSlice';
import {getProfile} from '../../Profile/model/selectors';
import {useNavigate} from 'react-router-dom';
import Timer from '../../Timer';
import {FlexV} from '../../../shared/ui/Flex/styled';
import {Text} from '../../../shared/ui/Text/Text';
import {COLORS} from '../../../shared/constants';
import {addPointsAndInited} from '../../Profile/model/service';

export const Quiz = () => {
    const dispatch = useAppDispatch()
    const question = useAppSelector(getQuestion)
    const profile = useAppSelector(getProfile)
    const router = useNavigate()

    const day = +dayjs().format('DD')
    useEffect(() => {
        dispatch(fetchQuestionById(day))
    }, []);
    const reset = () =>{
        dispatch(handleRight(null))
        if(question?.isRight){
            router(0)
        }//остановился, доделать, чтобы, если не угадывал, то не показывало верных ответов
    }
    useEffect(() => {
        if(question?.isRight !== null && !question?.inited && question){
            setTimeout(reset,1500)
        }
    }, [question?.isRight]);
    useEffect(() => {
        if(question?.dimaHelp && !question.inited){
            dispatch(addPointsAndInited())
        }
    }, [question]);
    if(!question){
        return <></>
    }

    if(profile && profile?.life <= 0){
        router('/regeneration')
    }
    return (
        <>
            {!question.inited
                ?   <ST.Container>
                    {question?.img && <ST.ImgContainer src={question?.img} alt={'1'}/>}
                    <ST.Question>{question?.question}</ST.Question>
                    {question.type === EtypeQuiz.CLASSIC && <ClassicQuiz question={question}/>}
                    {question.type === EtypeQuiz.INPUT && <InputQuiz question={question}/>}
                    {question.type === EtypeQuiz.MANY_CHOICES && <ManyQuiz question={question}/>}
                    {question.isRight !== null && question?.isRight !== undefined && question?.isRight !== true && <Alert isRight={question.isRight} password={question.password}/>}
                </ST.Container>
                : <ST.ContainerTimer>
                    <FlexV>
                        <Text color={COLORS.textGrey}>Пароль {question.password}</Text>
                        <Text>До следующей игры:</Text>
                        <Timer/>
                    </FlexV>
                </ST.ContainerTimer>}

        </>
    );
};
