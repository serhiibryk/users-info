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
  async getUserByID(id: number, setUser: (v: IAllUsers) => void): Promise<any> {
    await api
      .get(`users/${id}/`)
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const usersService = new UsersService()
