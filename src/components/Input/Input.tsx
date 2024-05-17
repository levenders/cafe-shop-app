import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  InputHTMLAttributes,
  forwardRef,
} from 'react'
import cn from 'classnames'

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
