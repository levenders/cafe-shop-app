import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cn from 'classnames'

import styles from './Button.module.css'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  appearance?: 'big' | 'small'
}

export const Button: FC<IButtonProps> = ({
  children,
  className,
  appearance = 'small',
  ...props
}) => {
  return (
    <button
      className={cn(className, styles.button, {
        [styles.big]: appearance === 'big',
        [styles.small]: appearance === 'small',
      })}
      {...props}
    >
      {children}
    </button>
  )
}
