import styled from 'styled-components'

export const TableContainer = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TableWrapper = styled.div`
  padding-bottom: 10px;
  border: 1px solid #455d7a;

  & .rc-table-cell {
    font-size: 20px;
    border-top: 1px solid #455d7a;
    border-left: 1px solid #455d7a;
  }
`

export const FormWrapper = styled.div`
  & .form {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 775px) {
      width: 28rem;
    }
  }
`
