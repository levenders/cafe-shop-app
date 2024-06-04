'use client'

import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'

import { Button } from '@/components/Button'
import { userActions } from '@/store/user.slice'

import type { TRootState } from '@/store'

import styles from './layout.module.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  const dispatch = useDispatch()

  const { replace } = useRouter()

  const items = useSelector((s: TRootState) => s.cart.items)

  const logout = () => {
    dispatch(userActions.logout())
    replace('/login')
  }

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.user}>
          <Image
            className={styles.avatar}
            src="/ui-icons/avatar.svg"
            width="100"
            height="100"
            alt="avatar-logo"
            priority={true}
          />
          <div className={styles.name}>Иван Иванов</div>
          <div className={styles.email}>ivanivano@ya.ru</div>
        </div>
        <div className={styles.menu}>
          <Link
            href="/menu"
            className={cn(styles.link, {
              [styles.active]: pathname === '/menu',
            })}
          >
            <span className={styles.menuIcon}></span>
            Меню
          </Link>
          <Link
            href="/cart"
            className={cn(styles.link, {
              [styles.active]: pathname === '/cart',
            })}
          >
            <span className={styles.cartIcon}></span>
            Корзина{' '}
            <span className={styles.count}>
              {items.reduce((prev, curr) => (prev += curr.count), 0)}
            </span>
          </Link>
        </div>
        <Button className={styles.logout} onClick={logout}>
          Выйти
          <span className={styles.logoutIcon}></span>
        </Button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
