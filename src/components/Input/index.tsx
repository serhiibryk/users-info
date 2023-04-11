import React, { FC } from 'react'

interface IForm {
  type: string
  name: string
  label: string
  action: any
}

const Input: FC<IForm> = ({ type, name, label, action }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...action} />
      <br />
    </>
  )
}

export default Input
