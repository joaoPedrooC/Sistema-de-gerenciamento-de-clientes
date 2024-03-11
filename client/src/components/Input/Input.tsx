import { FieldError } from "react-hook-form"

import styles from './style.module.css'
import { ForwardedRef, forwardRef } from "react"

interface IInputProps {
  placeholder: string
  type: string
  error?: FieldError
}

export const Input = forwardRef(({ placeholder, type, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={styles.input__container}>
      <input type={type} placeholder={placeholder} {...rest} className="fonts font__small" ref={ref} />
      { error ? <span className="fonts font__small">{error.message}</span> : null}
    </div>
  )
})