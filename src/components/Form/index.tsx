import React, { FC } from 'react'
import { AddTitle, ButtonAdd, ButtonWrapper, InputsContainer } from './style'
import { useForm } from 'react-hook-form'
import Input from '../Input'

import { UsersService } from '../../services/users'

interface IForm {
  allUsers: IAllUsers[]
  setAllUsers: (v: IAllUsers[]) => void
  loading?: boolean
  setLoading: (v: boolean) => void
}

const Form: FC<IForm> = ({ allUsers, setAllUsers, setLoading }) => {
  const { register, handleSubmit, reset } = useForm<IFormData>()

  const onSubmit = async (formData: IFormData) => {
    await UsersService.addUser(formData, allUsers, setAllUsers, setLoading, reset)
  }

  return (
    <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
      <AddTitle>Add field</AddTitle>
      <InputsContainer>
        <Input
          type={'text'}
          name={'name'}
          label={'Name:'}
          action={register('name')}
          placeholder={'name'}
        />
        <Input
          type={'number'}
          name={'age'}
          label={'Age:'}
          action={register('age')}
          placeholder={'age'}
        />
        <Input
          type={'text'}
          name={'about'}
          label={'About:'}
          action={register('about')}
          placeholder={'about'}
        />
      </InputsContainer>
      <ButtonWrapper>
        <ButtonAdd type='submit'>Add User</ButtonAdd>
      </ButtonWrapper>
    </form>
  )
}

export default Form
