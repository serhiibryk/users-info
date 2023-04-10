import React from 'react'
import './App.css'

import Table from './components/Table'
import { HeaderContainer } from './style'

function App() {
  return (
    <div className={'App'}>
      {/* <header className="App-header"></header> */}
      <main>
        <HeaderContainer>
          <Table />
        </HeaderContainer>
      </main>
    </div>
  )
}

export default App
