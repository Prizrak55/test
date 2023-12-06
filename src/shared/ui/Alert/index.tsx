
import * as ST from './styled'
export const Alert = ({isRight, password}:{isRight: boolean | null, password: number}) => {
    const text = isRight ? 'Правильно!' : 'Неверно!';
    return (
        <>
            {isRight !== null
                ? <ST.CONTEINER rightAnswer={isRight}>{text} {isRight ? `Пароль ${password}` : ''}</ST.CONTEINER>
                : ''
            }
        </>

    );
};
