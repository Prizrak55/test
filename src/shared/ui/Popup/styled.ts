import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgb(98, 98, 98)
`

export const Wrapper = styled.div`
  padding: 25px;
  position: relative;
`
export const Button = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
    padding: 12px 15px;
    background-color: rgb(255,0,0,0.8);
    border-radius: 50%;
    font-size: 16px;
    font-weight: bold;
`