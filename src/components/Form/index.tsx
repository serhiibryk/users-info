import React, { FC } from 'react'
import { ButtonAdd, ButtonWrapper } from './style'
import { useForm } from 'react-hook-form'
import Input from '../Input'

interface IForm {
  onSubmit: (formData: IFormData) => Promise<void>
  loading: boolean
}

const Form: FC<IForm> = ({ onSubmit, loading }) => {
  const { handleSubmit } = useForm<IFormData>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type={'text'} name={'name'} label={'name:'} />
      <Input type={'number'} name={'age'} label={'age:'} />
      <Input type={'text'} name={'about'} label={'about:'} />
      <ButtonWrapper>{!loading && <ButtonAdd type='submit'>Add User</ButtonAdd>}</ButtonWrapper>
    </form>
  )
}

export default Form
