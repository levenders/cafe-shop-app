import { forwardRef } from 'react'
import cn from 'classnames'

import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import styles from './Input.module.css'

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isValid?: boolean
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(function Input(
  { className, isValid, ...props },
  ref
) {
  return (
    <input
      className={cn(className, styles.input, {
        [styles.valid]: isValid,
      })}
      ref={ref}
      {...props}
    />
  )
})
