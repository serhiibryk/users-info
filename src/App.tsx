import React, { useState } from 'react'
import './App.css'
import Table from './components/Table'
import { HeaderContainer } from './style'

function App() {
  const [allUsers, setAllUsers] = useState<IAllUsers[]>([])

  return (
    <div className={'App'}>
      {/* <header className="App-header"></header> */}
      <main>
        <HeaderContainer>
          <Table allUsers={allUsers} setAllUsers={setAllUsers} />
        </HeaderContainer>
      </main>
    </div>
  )
}

export default App
