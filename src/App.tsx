import React, { useEffect, useState } from 'react'
import './App.css'
import Table from './components/Table'

import { Button, HeaderContainer } from './style'
import { UsersService } from './services/users'

function App() {
  const [allUsers, setAllUsers] = useState<IAllUsers[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 300,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 200,
    },
    {
      title: 'About user',
      dataIndex: 'about',
      key: 'about',
      width: 200,
    },
    {
      title: 'DEL',
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
      title: 'Edit',
      key: 'action',
      render: (text: any, record: IAllUsers) => (
        <Button
          onClick={() => UsersService.deleteUser(record.id, allUsers, setAllUsers, setLoading)}
        >
          Edit
        </Button>
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
          />
        </HeaderContainer>
      </main>
    </div>
  )
}

export default App
