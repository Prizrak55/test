import * as ST from './styled'

export enum FONTS {
    smaller = '10px',
    small = '14px',
    medium = '16px',
    large = '18px',
    'large-xl' = '20px',
    'mega' = '48px'
}
interface IText {
    color?: string;
    children: any;
    fontSize?: FONTS;
    bold?: boolean;
    $withIndent?: boolean;
}
export const Text = ({children, ...props}:IText) => {
    return (
        <ST.Text {...props}>{children}</ST.Text>
    );
};
