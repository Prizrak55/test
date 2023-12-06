import * as ST from './styled'
import {ReactNode} from 'react';
export const FlexH = ({children}:{children: ReactNode}) => {
    return (
        <ST.FlexH>
            {children}
        </ST.FlexH>
    );
};

export const FlexV = ({children}:{children: ReactNode}) => {
    return (
        <ST.FlexV>
            {children}
        </ST.FlexV>
    );
};
