import React, { FC } from 'react'
import Table from 'rc-table'

import { FormWrapper, TableContainer, TableWrapper } from './style'

import Form from '../Form'

interface ITable {
  allUsers: IAllUsers[]
  setAllUsers: (v: IAllUsers[]) => void
  columns: IColumn[]
  loading: boolean
  setLoading: (v: boolean) => void
  editRow: string | number | null
  setEditRow: (v: string | number | null) => void
}

const TableComponent: FC<ITable> = ({
  allUsers,
  columns,
  setAllUsers,
  setLoading,
  loading,
  editRow,
}) => {
  const rowClassName = (record: IAllUsers) => (editRow === record.id ? 'editable-row' : '')

  const tableProps = {
    columns,
    data: allUsers,
    rowClassName,
    // onRow: (record: IAllUsers) => ({
    //   onClick: () => handleRowClick(record),
    // }),
  }

  return (
    <TableContainer>
      <div>
        <TableWrapper>
          <Table {...tableProps} />
        </TableWrapper>
        <FormWrapper>
          <Form
            allUsers={allUsers}
            setAllUsers={setAllUsers}
            loading={loading}
            setLoading={setLoading}
          />
        </FormWrapper>
      </div>
    </TableContainer>
  )
}

export default TableComponent
