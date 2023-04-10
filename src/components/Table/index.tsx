import React, { FC, useEffect } from 'react'
import Table from 'rc-table'
import { usersService } from '../../services/users'
import { TableWrapper } from './style'

interface ITable {
  allUsers: IAllUsers[]
  setAllUsers: (v: IAllUsers[]) => void
  columns: any
}

const TableComponent: FC<ITable> = ({ allUsers, setAllUsers, columns }) => {
  useEffect(() => {
    usersService.getUsers(setAllUsers)
  }, [])

  return (
    <TableWrapper>
      <Table columns={columns} data={allUsers} />
    </TableWrapper>
  )
}

export default TableComponent
