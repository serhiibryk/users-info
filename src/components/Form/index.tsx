import React, { FC } from 'react'
import { ButtonAdd, ButtonWrapper } from './style'
import { useForm } from 'react-hook-form'
import Input from '../Input'

import { UsersService } from '../../services/users'

interface IForm {
  allUsers: IAllUsers[]
  setAllUsers: (v: IAllUsers[]) => void
  loading: boolean
  setLoading: (v: boolean) => void
}

const Form: FC<IForm> = ({ loading, allUsers, setAllUsers, setLoading }) => {
  const { register, handleSubmit, reset } = useForm<IFormData>()

  const onSubmit = async (formData: IFormData) => {
    await UsersService.addUser(formData, allUsers, setAllUsers, setLoading, reset)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type={'text'} name={'name'} label={'name:'} action={register('name')} />
      <Input type={'number'} name={'age'} label={'age:'} action={register('age')} />
      <Input type={'text'} name={'about'} label={'about:'} action={register('about')} />
      <ButtonWrapper>{!loading && <ButtonAdd type='submit'>Add User</ButtonAdd>}</ButtonWrapper>
    </form>
  )
}

export default Form
