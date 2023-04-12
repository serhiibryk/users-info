import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & .input {
    height: 22px;
    width: 150px;
    background-color: #e3e3e3;
    color: black;
    border: 2px solid #233142;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;

    &:hover {
      border: 2px solid #455d7a;
      box-shadow: 0 0 4px #455d7a;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 4px #455d7a;
    }
  }

  & .label {
    font-size: 20px;
    font-weight: 500;
    padding-right: 10px;
  }
`
