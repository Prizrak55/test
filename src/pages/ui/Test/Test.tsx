import {useSelector} from 'react-redux';
import {getProfile} from '../../../components/Profile/model/selectors';
import {useEffect} from 'react';
import {$api} from '../../../store/axios';

export const Test = () => {
    const data2 = useSelector(getProfile)

    useEffect(() => {
        (async ()=>{
            const response = await $api.get('/questions/')
        })()
    }, []);
    return (
        <>2</>
    );
};
