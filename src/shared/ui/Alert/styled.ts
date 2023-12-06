import styled from 'styled-components';
import {TRUE_ANSWER, WRONG_ANSWER} from '../../constants';
export const CONTEINER = styled.div<{
    rightAnswer: boolean | null,
}>`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
  top: 0;
  left: 0;
  height: 200px;
  z-index: 999;
  background-color: ${({rightAnswer})=>{
        if(rightAnswer === null) {
            return ''
        }
        return rightAnswer ? TRUE_ANSWER : WRONG_ANSWER
    }};
`
