import { UseFormReset } from 'react-hook-form'
import { api } from '.'
import axios from 'axios'

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
      await api.delete(`users/${id}/`).then((res) => {
        console.log(res)
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
      const result = await axios.post(
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
  editUser: async (
    data: IAllUsers,
    setEditRow: (v: string | number | null) => void,
    users: IAllUsers[],
    setUsers: (v: IAllUsers[]) => void,
    setLoading: (v: boolean) => void,
  ) => {
    try {
      setLoading(true)
      axios
        .put(`https://6433c7661c5ed06c9586812f.mockapi.io/api/v1/users/${data.id}`, data)
        .then((res) => {
          const currId = res.data.id
          const currUser = users.find((user) => user.id === currId)

          const final = users.map((user) => {
            if (user === currUser) {
              return res.data
            }
            return user
          })

          setUsers(final)
          setEditRow(null)
        })

      setLoading(false)
    } catch (e) {
      if ((e as IError).statusCode && (e as IError).statusCode > 399) {
        console.log('Error in addUser', e)
      }
    }
  },
}
