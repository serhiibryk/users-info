import React, { FC } from 'react'
import Table from 'rc-table'
import { useForm } from 'react-hook-form'
import { TableWrapper } from './style'

import { UsersService } from '../../services/users'
import Form from '../Form'

interface ITable {
  allUsers: IAllUsers[]
  setAllUsers: (v: IAllUsers[]) => void
  columns: IColumn[]
  loading: boolean
  setLoading: (v: boolean) => void
}

const TableComponent: FC<ITable> = ({ allUsers, columns, setAllUsers, setLoading, loading }) => {
  const { reset } = useForm<IFormData>()

  const onSubmit = async (formData: IFormData) => {
    UsersService.addUser(formData, allUsers, setAllUsers, setLoading, reset)
  }

  return (
    <TableWrapper>
      <div className='App'>
        <Form onSubmit={onSubmit} loading={loading} />
        <br />
        <Table columns={columns} data={allUsers} />
      </div>
    </TableWrapper>
  )
}

export default TableComponent
