import styled from 'styled-components';
import {Button} from '../../../shared/ui/Button/styled';
import {COLORS} from '../../../shared/constants';
import {Text} from '../../../shared/ui/Text/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  padding: 0 20px;
  
  ${Text}{
    margin-bottom: 10px;
  }
  ${Button}{
    margin-top: 25px;
  }
`
export const Input = styled.input`
  color: #854747;
  font-weight: bold;
  width: 100px;
  font-size: 24px;
`