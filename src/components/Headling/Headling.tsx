import cn from 'classnames'

import type { FC, HTMLAttributes, ReactNode } from 'react'

import styles from './Headling.module.css'

interface IHeadlingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}

export const Headling: FC<IHeadlingProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h1 className={cn(className, styles.headling)} {...props}>
      {children}
    </h1>
  )
}
