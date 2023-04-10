import React, { FC, useEffect } from 'react'
import { usersService } from '../../services/users'

interface ITable {
  allUsers: IAllUsers[]
  setAllUsers: (v: IAllUsers[]) => void
}

const Table: FC<ITable> = ({ allUsers, setAllUsers }) => {
  useEffect(() => {
    usersService.getUsers(setAllUsers)
  }, [])

  return (
    <div>
      {allUsers.map((user, i) => {
        return <div key={i}>{user.name}</div>
      })}
    </div>
  )
}

export default Table
