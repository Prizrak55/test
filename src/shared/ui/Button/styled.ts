import styled from 'styled-components';
export const Button = styled.button<{color?:string, height?: string, width?: string}>`
  height: ${props=> props.height ? props.height : '50px'};
  width: ${props=> props.width ? props.width : '180px'};
  margin: 5px;
  border: none;
  border-radius: 15px;
  color: white;
  background-color: ${props=> props.color};
  display: flex;
  letter-spacing: 1.2px;
  justify-content: center;
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