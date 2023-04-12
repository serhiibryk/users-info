import styled from 'styled-components'

export const MainContainer = styled.div`
  & .rc-table {
    min-height: calc(100vh - 10rem);
    max-height: calc(100vh - 10rem);
    overflow: auto;
  }
`

export const Button = styled.button`
  background: #f95959;
  height: 26px;
  width: max-content;
  padding: 0 10px 0 10px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &.delButton {
    border: 1px solid #f95959;

    :hover {
      border: 1px solid #97124b;
      background-color: #dc4444;
    }
  }

  &.saveButton {
    background-color: #455d7a;
    border: 1px solid #233142;
  }

  &.editButton {
    background-color: #e3e3e3;
    color: #455d7a;
    border: 1px solid #455d7a;

    :hover {
      border: 1px solid #233142;
      background-color: #455d7a;
      color: white;
    }
  }
`
