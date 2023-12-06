import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {FONTS, Text} from '../../shared/ui/Text/Text';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/hooks';
import {getProfile} from '../Profile/model/selectors';

dayjs.extend(duration);

const CountdownTimer = () => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    const router = useNavigate()

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    function calculateTimeRemaining() {
        const now = dayjs();
        const tomorrow = now.add(1, 'day').startOf('day');
        return dayjs.duration(tomorrow.diff(now));
    }
    function pad(number: number) {
        return number < 10 ? '0' + number : number;
    }
    const hours = pad(timeRemaining.hours());
    const minutes = pad(timeRemaining.minutes());
    const seconds = pad(timeRemaining.seconds());
    if(hours === '00'){
        router(0)
    }
    return (
        <Text bold={true} fontSize={FONTS.mega}>
            {hours}:{minutes}:{seconds}
        </Text>
    );
};

export default CountdownTimer;
