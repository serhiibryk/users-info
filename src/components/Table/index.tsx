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
}

const TableComponent: FC<ITable> = ({ allUsers, columns, setAllUsers, setLoading, loading }) => {
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
        <Table columns={columns} data={allUsers} />
      </div>
    </TableWrapper>
  )
}

export default TableComponent
