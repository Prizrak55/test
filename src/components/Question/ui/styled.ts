import {BG_COLOR_QUESTION, BORDER_QUESTION} from '../../../shared/constants';
import styled from 'styled-components';
export const Container = styled.div`
  padding: 20px;
  position: relative;
`
// @ts-ignore
export const ContainerTimer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
export const ImgContainer = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px;
`
export const Question = styled.div`
    font-size: 16px;
    color: white;
    padding: 20px;
    border-radius: 15px;
    width: 100%;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: ${BG_COLOR_QUESTION};
    border: 1px solid ${BORDER_QUESTION};
`