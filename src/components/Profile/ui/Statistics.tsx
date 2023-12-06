import {getIsLoading, getProfile} from '../model/selectors';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import {useMemo} from 'react';
import * as ST from './styled/'
import {IStatisticsKeys} from '../model/types';
import {decrement, increment} from '../model/slice/profile';
import Button from '../../../shared/ui/Button';
import {COLORS, COLORS_FOR_CARD_SHADOW} from '../../../shared/constants';
import {FONTS, Text} from '../../../shared/ui/Text/Text';

export const Statistics = () => {
    const profile = useAppSelector(getProfile)
    const isLoading = useAppSelector(getIsLoading)
    const dispatch = useAppDispatch()

    const allStats = useMemo(()=>{
        if(profile){
            return Object.keys(profile.stats) as unknown as IStatisticsKeys[]
        }
        return []
    },[profile])

    const onIncrement = (stat: IStatisticsKeys) =>{
        dispatch(increment(stat))
    }
    const onDecrement = (stat: IStatisticsKeys) =>{
        dispatch(decrement(stat))
    }
    if(isLoading){
        return null;
    }
    if(!profile){
        return null
    }

    return (
        <>
            {allStats.map((item: IStatisticsKeys)=>{
                return(
                    <>
                        <ST.Container key={item}>
                            <ST.WrapperText>
                                <Text>{profile.stats[item].ru}</Text>
                            </ST.WrapperText>
                            <Button color={COLORS_FOR_CARD_SHADOW['#f85555']} width={'100px'} onClick={()=>onDecrement(item)}>убрать</Button>
                            <Text>{profile.stats[item].value}</Text>
                            <Button color={COLORS_FOR_CARD_SHADOW['#15d18e']} width={'100px'} onClick={()=>onIncrement(item)}>добавить</Button>
                        </ST.Container>
                        <Text color={COLORS.textGrey} fontSize={FONTS.small}>{profile.stats[item].desc}</Text>
                    </>
                )
            })}
        </>
    );
};
