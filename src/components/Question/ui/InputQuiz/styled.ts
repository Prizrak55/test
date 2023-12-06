import styled from 'styled-components';
import {Input} from '../../../../shared/ui/Input/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  gap: 20px;
  ${Input}{
    margin-top: 80px;
  }
`