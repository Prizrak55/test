import * as ST from './styled'
import {ReactComponent as BottomHelp} from '../../shared/icons/bottom-help.svg'
import {ReactComponent as Explanation} from '../../shared/icons/explanation.svg'

import {NO_USED_TIP} from '../../shared/constants';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {getProfile} from '../Profile/model/selectors';
import {FlexH} from '../../shared/ui/Flex';
import {useLocation, useNavigate} from 'react-router-dom';
import {getQuestion} from '../Question/model/selectors';
import {Popup} from '../../shared/ui/Popup/Popup';
import {FONTS, Text} from '../../shared/ui/Text/Text';
import {useMemo, useState} from 'react';

export const Footer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenHelpPopup, setIsOpenHelpPopup] = useState(false)
    const profile = useAppSelector(getProfile)
    const question = useAppSelector(getQuestion)

    const dispatch = useAppDispatch()
    const router = useNavigate()
    const location = useLocation()
    console.log(location.pathname === '/quiz')
    const push = () =>{
        router('/profile')
    }
    const onOpen = () =>{
        setIsOpen(true)
    }
    const onClose = () =>{
        setIsOpen(false)
    }
    const onOpenHelp = () =>{
        setIsOpenHelpPopup(true)
    }
    const onCloseHelp = () =>{
        setIsOpenHelpPopup(false)
    }
    const wordsHelp = useMemo(() =>{
        if(profile?.stats){
            const num = Math.floor(profile?.stats.intelligence.value / 5)
            return question?.help?.slice(0, num)
        }
    },[question?.help])

    return (
        <>
            <ST.Wrapper1>
                <FlexH>
                    <BottomHelp onClick={onOpenHelp} width={35} height={35} fill={NO_USED_TIP}/>
                </FlexH>
            </ST.Wrapper1>
            <ST.Wrapper2>
                <FlexH>
                    <Explanation onClick={onOpen} width={35} height={35} stroke={NO_USED_TIP}/>
                </FlexH>
            </ST.Wrapper2>
            {isOpen && <Popup onCallback={onClose}>
                <Text>Правила: простые, отгадываешь вопрос,<br/> и тебе приходит код, используя его, ты можешь открыть подарок.</Text>
                <Text>Есть 3 подсказки, они свеху, давай слева на право</Text>
                <Text>Звезда - Убирает 2 варианта ответа</Text>
                <Text>Четверть курга - Убирает 1 вариант ответа</Text>
                <Text>Знак вопроса - помощь димы, нажимай на нее только в самый тяжелый момент, когда выхода не будет и тьма будет сгущаться.</Text>
                <Text>Слева внизу знак, можешь нажимать на него сколько хочешь, там будут слова с подсказками к каждому вопросу, если будешь качать Интелект, то их станет больше</Text>
                <Text>И еще, если что-то не работает, попробуй обновить страницу.</Text>
            </Popup>}

            {isOpenHelpPopup && <Popup onCallback={onCloseHelp}>
                <Text>У тебя {profile?.stats.intelligence.value} интелекта, вот доступные подсказки:</Text>
                <br/>
                {wordsHelp && wordsHelp.map((item, index)=>(
                    <Text fontSize={FONTS['large-xl']} key={item}>{index+1} {item}</Text>
                ))}
            </Popup>}
        </>
    );
};
