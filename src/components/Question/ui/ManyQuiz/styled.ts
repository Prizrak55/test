import styled from 'styled-components';
import {Input} from '../../../../shared/ui/Input/styled';
export const Conteiner = styled.div<{color: string}>`
    display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  ${Input}{
    margin-left: 10px;
    margin-bottom: 8px;
  }
  p{
    margin-right: 10px;
    margin-bottom: 8px;
  }
  
  margin-top: 10px;
  height: 60px;
  width: 220px;
  border: none;
  border-radius: 15px;
  color: white;
  background-color: ${props=> props.color};
  letter-spacing: 1.2px;
  align-items: center;
  cursor: pointer;
  position: relative;
  text-transform: none;
  &:after {
    position: absolute;
    border-bottom: 7px solid #181a1e;
    opacity: 0.5;
    bottom: 0;
    z-index: 99;
    width: 100%;
    height: 10px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    content: "";
  }

  &:hover {
    opacity: 0.9;
  }
`