import * as ST from './styled'
import Button from '../../../shared/ui/Button';
import {COLORS, WRONG_ANSWER} from '../../../shared/constants';
import {FONTS, Text} from '../../../shared/ui/Text/Text';
import {useState} from 'react';
import {useAppDispatch} from '../../../hooks/hooks';
import {Link} from 'react-router-dom';
import {addLife as add} from '../../../components/Profile/model/service';

export const Regeneration = () => {
    const [name, setName] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useAppDispatch()
    const handleChange = (event:any) => {
        setName(event.target.value);
    };

    const addLife = () =>{
        if(Number(name) > 10){
            setIsOpen(true)
            dispatch(add(1))//в стор тоже добавить
        }else{
            dispatch(add(Number(name)))
        }
    }
    return (
        <ST.Container>
            <Text>Чтож, у тебя закончились все жизни и теперь тебе придется постараться, чтобы получить еще. Но за то, что ты такая красивая, дам тебе еще парочку. Просто так.</Text>
            <Text>Введи количество жизней, сколько ты хочешь получить. Совсем любое. Рекомендую число 99.</Text>
            {isOpen && <Text color={'red'} bold={true} fontSize={FONTS.large}>Жадность... Жадность наказуема, ты могла бы ввести меньше и получила бы желаемое, но нет.</Text>}
            {isOpen && <Text color={'red'} bold={true} fontSize={FONTS.large}>В наказание я дам тебе всего ОДНО сердце.</Text>}
            <ST.Input type="text" id="name" value={name} onChange={handleChange} />
            {!isOpen
                ?   <Button color={COLORS.textGrey} onClick={addLife}>Получить</Button>
                :   <Link to={'/quiz'}><Button color={WRONG_ANSWER} onClick={console.log}>Продолжить игру</Button></Link>
            }
        </ST.Container>
    );
};
