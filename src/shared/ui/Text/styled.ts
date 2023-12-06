import styled from 'styled-components';
import {COLORS} from '../../constants';
import {FONTS} from './Text';

export const Text = styled.div<{color?: string, fontSize?: FONTS, bold?: boolean, $withIndent?: boolean}>`
  color: ${props=> props.color ? props.color : `${COLORS.textWite}`};
  font-size: ${props=> props.fontSize ? props.fontSize : `${FONTS.small}`};
  font-weight: ${props=> props.bold ? 'bold' : ''};
  letter-spacing: 1px;
  margin-bottom: ${props=> props.$withIndent ? '16px': ''};
`