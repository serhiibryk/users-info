import { api } from '.'

class UsersService {
  async getUsers(setAllUsers: (v: IAllUsers[]) => void): Promise<any> {
    await api
      .get('users')
      .then((response) => {
        setAllUsers(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  async getUserByID(id: string, setUser: (v: IAllUsers) => void): Promise<any> {
    await api
      .get(`users/${id}/`)
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  async deleteUser(
    id: string,
    users: IAllUsers[],
    setUsers: (v: IAllUsers[]) => void,
  ): Promise<any> {
    await api
      .delete(`users/${id}/`)
      .then((response) => {
        console.log(response)
        const newUsers = users.filter((user) => user.id !== id)
        setUsers(newUsers)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const usersService = new UsersService()
