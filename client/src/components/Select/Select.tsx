import { ForwardedRef, ReactNode, forwardRef } from "react"

import styles from './style.module.css'

interface ISelectProps {
  children: ReactNode
}

export const Select = forwardRef(({ children, ...rest }: ISelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  return (
    <select {...rest} className={`fonts font__small ${styles.select}`} ref={ref}>
      {children}
    </select>
  )
})