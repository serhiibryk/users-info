import styled from 'styled-components'

export const ButtonAdd = styled.button`
  background: #455d7a;
  height: 36px;
  width: max-content;
  padding: 0 15px 0 15px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;

  :hover {
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
`

export const AddTitle = styled.div`
  padding-left: 15px;
  font-size: 20px;
  font-weight: 700;
`
