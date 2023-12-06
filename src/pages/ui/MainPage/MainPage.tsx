import * as ST from './styled'
import Button from '../../../shared/ui/Button';
import {BORDER_QUESTION} from '../../../shared/constants';
import {Text} from '../../../shared/ui/Text/Text';
export const MainPage = () => {
    return (
        <ST.Conteiner>
            <Text>Привет</Text>
            <Text>Поиграем?</Text>
            <Text>Сейчас введу тебя в курс дела...</Text>
            <Text>И так. В прошлый год получилось не супер круто, как-то все ломалось, не работало, дизайн был говно.</Text>
            <Text>Но в этот год я постарался. Приложил много усилий и времени, чтобы все прошло хорошо и интересно...</Text>
            <Text>Как видишь, ты можешь заходить сюда в любое время и все будет работать.</Text>
            <Text>Этот сайт специально для тебя.</Text>
            <Text>Целую, бесконечно твой... Любимка.</Text>
            <Text>А, и еще! Нажми справа внизу на книгу, там будут детальные правила</Text>
            <ST.Wrapper>
                <Button color={BORDER_QUESTION} link={'/profile'} onClick={()=> '{}'}>Играть!</Button>
            </ST.Wrapper>
        </ST.Conteiner>
    );
};
