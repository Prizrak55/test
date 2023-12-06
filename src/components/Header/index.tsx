import * as ST from './styled'
import {ReactComponent as Life} from '../../shared/icons/life.svg'
import {ReactComponent as Profile} from '../../shared/icons/profile.svg'
import {ReactComponent as Half} from '../../shared/icons/50x50.svg'
import {ReactComponent as Half75} from '../../shared/icons/75.svg'
import {ReactComponent as Help} from '../../shared/icons/help.svg'

import {NO_USED_TIP, USED_TIP, WRONG_ANSWER} from '../../shared/constants';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {getProfile} from '../Profile/model/selectors';
import {useEffect} from 'react';
import {fetchUserById, usingHelp} from '../Profile/model/service';
import {FlexH} from '../../shared/ui/Flex';
import {useNavigate} from 'react-router-dom';
import {TNameTips} from '../Profile/model/types';
import {getQuestion} from '../Question/model/selectors';
import {EtypeQuiz} from '../Question/model/types';

export const Header = () => {
    const profile = useAppSelector(getProfile)
    const question = useAppSelector(getQuestion)

    const dispatch = useAppDispatch()
    const router = useNavigate()
    const push = () =>{
        router('/profile')
    }
    useEffect(() => {
        dispatch(fetchUserById())
    }, []);
    const isManyOrClassic = (question?.type === EtypeQuiz.MANY_CHOICES || question?.type === EtypeQuiz.CLASSIC)
    const onHelp = (name: TNameTips) =>{
        dispatch(usingHelp(name))
    }

    return (
        <ST.Wrapper>
            <FlexH>
                <Life width={25} height={25} fill={NO_USED_TIP}/>
                <p>{profile?.life}</p>
            </FlexH>
            <FlexH>
                <Half onClick={()=>isManyOrClassic ? onHelp('50x50') : null} width={35} height={35} fill={isManyOrClassic ? NO_USED_TIP : USED_TIP} /> {profile?.tips['50x50'].value}
                <Half75 onClick={()=>isManyOrClassic ? onHelp('75x25'): null} width={35} height={35} fill={'none'} stroke={isManyOrClassic ? NO_USED_TIP: USED_TIP} />{profile?.tips['75x25'].value}
                <Help onClick={()=>onHelp('dimaHelp')} width={35} height={35} fill={NO_USED_TIP} />{profile?.tips.dimaHelp.value}
            </FlexH>
            <FlexH>
                <Profile onClick={push} width={25} height={25}  fill={NO_USED_TIP}/>
            </FlexH>
        </ST.Wrapper>
    );
};
