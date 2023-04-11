import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

interface IForm {
  type: string
  name: 'name' | 'id' | 'age' | 'about'
  label: string
}

const Input: FC<IForm> = ({ type, name, label }) => {
  const { register } = useForm<IFormData>()

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...register(name)} />
      <br />
    </>
  )
}

export default Input
