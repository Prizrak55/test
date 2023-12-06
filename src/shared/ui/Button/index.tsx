import * as ST from './styled'
import {Link} from 'react-router-dom';
interface IButton {
    children: string;
    onClick:()=>void;
    color?:string;
    link?: string;
    height?: string;
    width?: string;
}
const Button = ({ children, onClick, link, ...props }: IButton) =>{
    return(
        <>
            {link
                ? <Link to={link}>
                    <ST.Button {...props} onClick={onClick}>{children}</ST.Button>
                </Link>
                :   <ST.Button {...props} onClick={onClick}>{children}</ST.Button>
            }
        </>
    )
}

export default  Button