import { UseFormReset } from 'react-hook-form'
import { api } from '.'

export const UsersService = {
  getUsers: async (setAllUsers: (v: IAllUsers[]) => void, setLoading: (v: boolean) => void) => {
    try {
      setLoading(true)
      await api.get('users').then((response) => {
        setAllUsers(response.data)
      })
      setLoading(false)
    } catch (e) {
      if ((e as IError).statusCode && (e as IError).statusCode > 399) {
        console.log('Error in getUsers', e)
      }
    }
  },
  getUserByID: async (
    id: string,
    setUser: (v: IAllUsers) => void,
    setLoading: (v: boolean) => void,
  ) => {
    try {
      setLoading(true)
      await api.get(`users/${id}/`).then((response) => {
        setUser(response.data)
      })
      setLoading(false)
    } catch (e) {
      if ((e as IError).statusCode && (e as IError).statusCode > 399) {
        console.log('Error in getUserByID', e)
      }
    }
  },
  deleteUser: async (
    id: string,
    users: IAllUsers[],
    setUsers: (v: IAllUsers[]) => void,
    setLoading: (v: boolean) => void,
  ) => {
    try {
      setLoading(true)
      await api.delete(`users/${id}/`).then((response) => {
        console.log(response)
        const newUsers = users.filter((user) => user.id !== id)
        setUsers(newUsers)
        setLoading(false)
      })
    } catch (e) {
      if ((e as IError).statusCode && (e as IError).statusCode > 399) {
        console.log('Error in deleteUser', e)
      }
    }
  },
  addUser: async (
    userData: IFormData,
    users: IAllUsers[],
    setUsers: (v: IAllUsers[]) => void,
    setLoading: (v: boolean) => void,
    reset: UseFormReset<IFormData>,
  ) => {
    try {
      setLoading(true)
      const result = await api.post(
        'https://6433c7661c5ed06c9586812f.mockapi.io/api/v1/users',
        userData,
      )
      setUsers([...users, result.data])
      setLoading(false)
      reset()
    } catch (e) {
      if ((e as IError).statusCode && (e as IError).statusCode > 399) {
        console.log('Error in addUser', e)
      }
    }
  },
}
