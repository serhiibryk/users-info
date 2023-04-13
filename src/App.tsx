import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import Table from './components/Table'
import { UsersService } from './services/users'

import Input from './components/Input'

import { Button, MainContainer } from './style'
import './App.css'

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
        editRow === record.id ? (
          <Input
            type={'text'}
            name={'name'}
            action={register('name')}
            // defaultValue={record.name}
          />
        ) : (
          text
        ),
      width: 400,
    },
    {
      title: 'User age',
      dataIndex: 'age',
      key: 'age',
      render: (text: string, record: IAllUsers) =>
        editRow === record.id ? (
          <Input
            type={'text'}
            name={'name'}
            action={register('age')}
            // defaultValue={record.age}
          />
        ) : (
          text
        ),
      width: 200,
    },
    {
      title: 'About user',
      dataIndex: 'about',
      key: 'about',
      render: (text: string, record: IAllUsers) =>
        editRow === record.id ? (
          <Input
            type={'text'}
            name={'name'}
            action={register('about')}
            // defaultValue={record.about}
          />
        ) : (
          text
        ),
      width: 400,
    },
    {
      title: '',
      key: 'action',
      render: (text: any, record: IAllUsers) => (
        <Button
          className={'delButton'}
          onClick={() => UsersService.deleteUser(record.id, allUsers, setAllUsers, setLoading)}
        >
          Delete
        </Button>
      ),
      width: 50,
    },
    {
      title: '',
      key: 'action',
      render: (text: any, record: IAllUsers) =>
        editRow === record.id ? (
          <Button className={'saveButton'} onClick={() => handleSave(record)}>
            Save
          </Button>
        ) : (
          <Button className={'editButton'} onClick={() => handleRowClick(record)}>
            Edit
          </Button>
        ),
      width: 100,
    },
  ]

  // const dispatch = useDispatch()
  // const pending = useSelector(getPendingSelector)
  // const users = useSelector(getUsersSelector)
  // const error = useSelector(getErrorSelector)

  // useEffect(() => {
  //   dispatch(fetchUserRequest())
  // }, [])

  useEffect(() => {
    UsersService.getUsers(setAllUsers, setLoading)
  }, [])

  return (
    <div className={'App'}>
      <main>
        <MainContainer>
          <Table
            allUsers={allUsers}
            setAllUsers={setAllUsers}
            columns={columns}
            setLoading={setLoading}
            loading={loading}
            editRow={editRow}
            setEditRow={setEditRow}
          />
        </MainContainer>
      </main>
    </div>
  )
}

export default App
