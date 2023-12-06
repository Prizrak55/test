import styled from 'styled-components';
import {FlexH} from '../../shared/ui/Flex/styled';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border-bottom: 1px solid #1f222a;
    box-shadow: 0px 1px 5px 2px rgba(228, 235, 241, 0.2);
  
  ${FlexH}{
    gap: 10px;
  }
`
