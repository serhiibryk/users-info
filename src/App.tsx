import React, { useEffect, useState } from 'react'
import './App.css'
import Table from './components/Table'

import { Button, HeaderContainer } from './style'
import { UsersService } from './services/users'
import { useForm } from 'react-hook-form'

const App = () => {
  const [allUsers, setAllUsers] = useState<IAllUsers[]>([])
  const [editRow, setEditRow] = useState<string | number | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { register, watch, reset } = useForm<IFormData>()

  const name = watch('name')
  const age = watch('age')
  const about = watch('about')

  const handleSave = (data: IAllUsers) => {
    const newData = { ...data, name: name, age: age, about: about }

    UsersService.editUser(newData, setEditRow, allUsers, setAllUsers, setLoading)
    reset()
  }

  const handleRowClick = (record: IAllUsers) => {
    setEditRow(record.id)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: 'User name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: IAllUsers) =>
        editRow === record.id ? <input {...register('name')} defaultValue={record.name} /> : text,
      width: 300,
    },
    {
      title: 'User age',
      dataIndex: 'age',
      key: 'age',
      render: (text: string, record: IAllUsers) =>
        editRow === record.id ? <input {...register('age')} defaultValue={record.age} /> : text,
      width: 200,
    },
    {
      title: 'About user',
      dataIndex: 'about',
      key: 'about',
      render: (text: string, record: IAllUsers) =>
        editRow === record.id ? <input {...register('about')} defaultValue={record.about} /> : text,
      width: 200,
    },
    {
      title: '',
      key: 'action',
      render: (text: any, record: IAllUsers) => (
        <Button
          onClick={() => UsersService.deleteUser(record.id, allUsers, setAllUsers, setLoading)}
        >
          Delete
        </Button>
      ),
      width: 100,
    },
    {
      title: '',
      key: 'action',
      render: (text: any, record: IAllUsers) =>
        editRow === record.id ? (
          <Button onClick={() => handleSave(record)}>Save</Button>
        ) : (
          <Button onClick={() => handleRowClick(record)}>Edit</Button>
        ),
      width: 100,
    },
  ]

  useEffect(() => {
    UsersService.getUsers(setAllUsers, setLoading)
  }, [])

  return (
    <div className={'App'}>
      <main>
        <HeaderContainer>
          <Table
            allUsers={allUsers}
            setAllUsers={setAllUsers}
            columns={columns}
            setLoading={setLoading}
            loading={loading}
            editRow={editRow}
            setEditRow={setEditRow}
          />
        </HeaderContainer>
      </main>
    </div>
  )
}

export default App
