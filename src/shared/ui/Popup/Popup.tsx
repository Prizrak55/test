import * as ST from './styled'
import {ReactNode} from 'react';

export const Popup = ({children, onCallback}:{children: ReactNode,onCallback: ()=> void}) => {
    return (
        <ST.Overlay>
            <ST.Wrapper>
                <ST.Button onClick={onCallback}>Х</ST.Button>
                {children}
            </ST.Wrapper>
        </ST.Overlay>
    );
};
