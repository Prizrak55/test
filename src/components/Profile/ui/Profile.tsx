import {Statistics} from './Statistics';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import {getProfile} from '../model/selectors';
import {useEffect} from 'react';
import {fetchUserById, saveSettings} from '../model/service';
import * as ST from './styled'
import {COLORS, COLORS_FOR_CARD_SHADOW} from '../../../shared/constants';
import Button from '../../../shared/ui/Button';
import {FONTS, Text} from '../../../shared/ui/Text/Text';
import {FlexH, FlexV} from '../../../shared/ui/Flex';
import {useNavigate} from 'react-router-dom';
export const Profile = () => {
    const profile = useAppSelector(getProfile)
    const router = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUserById())
    }, []);
    const onGame = () =>{
        dispatch(saveSettings())
        router('/quiz')
    }
    if(!profile?.firstName){
        return <div>2</div>
    }
    return (
        <ST.Wrapper>
            <FlexV>
                <Text>{profile.firstName}</Text>
                <Text>{profile.lastName}</Text>
            </FlexV>
            <h4>Очки статистики: {profile.unused}</h4>
            <Statistics/>
            {(profile && profile.stats.unknownStat.value) === 20
                ?  <Text $withIndent fontSize={FONTS.smaller}>Поздравляю! Подняв ваш стат ??? вы выиграли СУПЕР-ПРИЗ, требуйте его от Димы. Приз можно получить 1 раз.</Text>
                : '' }
            <FlexH>
                <Button color={COLORS_FOR_CARD_SHADOW['#3779ff']} onClick={onGame}>К игре</Button>
            </FlexH>
        </ST.Wrapper>
    );
};
