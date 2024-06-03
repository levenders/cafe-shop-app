import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'
import Image from 'next/image'

import styles from './Search.module.css'

interface ISearchProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isValid?: boolean
}

export const Search = forwardRef<HTMLInputElement, ISearchProps>(function Input(
  { className, isValid, ...props },
  ref
) {
  return (
    <div className={styles.wrapper}>
      <input
        className={cn(className, styles.input, {
          [styles.valid]: isValid,
        })}
        ref={ref}
        {...props}
      />
      <span className={styles.searchIcon}></span>
    </div>
  )
})
