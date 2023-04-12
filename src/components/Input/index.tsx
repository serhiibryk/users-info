import React, { FC } from 'react'
import { InputWrapper } from './style'

interface IForm {
  type: string
  name: string
  action: any
  label?: string
  defaultValue?: string | number
  placeholder?: string
}

const Input: FC<IForm> = ({ type, name, label, action, defaultValue, placeholder }) => {
  return (
    <InputWrapper>
      {label && (
        <label className={'label'} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={'input'}
        type={type}
        id={name}
        {...action}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </InputWrapper>
  )
}

export default Input
