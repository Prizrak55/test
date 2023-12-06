import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #ccc;
  font-size: 16px;
  color: #555;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px #007bff;
  }

  &::placeholder {
    color: #999;
  }
`