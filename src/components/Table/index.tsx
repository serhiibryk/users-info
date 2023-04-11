import React, { FC } from 'react'
import Table from 'rc-table'

import { TableWrapper } from './style'

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
    <TableWrapper>
      <div className='App'>
        <Form
          allUsers={allUsers}
          setAllUsers={setAllUsers}
          loading={loading}
          setLoading={setLoading}
        />
        <br />
        <Table {...tableProps} />
      </div>
    </TableWrapper>
  )
}

export default TableComponent
