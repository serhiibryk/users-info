import React, { useState } from 'react'
import './App.css'
import Table from './components/Table'
import { usersService } from './services/users'
import { HeaderContainer } from './style'

function App() {
  const [allUsers, setAllUsers] = useState<IAllUsers[]>([])

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
      title: 'Action',
      key: 'action',
      render: (text: any, record: IAllUsers) => (
        <button onClick={() => usersService.deleteUser(record.id, allUsers, setAllUsers)}>
          Delete
        </button>
      ),
    },
  ]

  return (
    <div className={'App'}>
      <main>
        <HeaderContainer>
          <Table allUsers={allUsers} setAllUsers={setAllUsers} columns={columns} />
        </HeaderContainer>
      </main>
    </div>
  )
}

export default App
