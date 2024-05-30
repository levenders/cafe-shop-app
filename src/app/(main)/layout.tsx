'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cn from 'classnames'
import styles from './layout.module.css'
import { Button } from '@/components/Button'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { TRootState } from '@/store'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  const { replace } = useRouter()

  const items = useSelector((s: TRootState) => s.cart.items)

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
            <Image
              src="/ui-icons/menu.svg"
              width="30"
              height="30"
              alt="menu-logo"
              priority
            />
            Меню
          </Link>
          <Link
            href="/cart"
            className={cn(styles.link, {
              [styles.active]: pathname === '/cart',
            })}
          >
            <Image
              src="/ui-icons/cart.svg"
              width="30"
              height="30"
              alt="cart-logo"
              priority
            />
            Корзина{' '}
            <span className={styles.count}>
              {items.reduce((prev, curr) => (prev += curr.count), 0)}
            </span>
          </Link>
        </div>
        <Button className={styles.logout} onClick={() => replace('/login')}>
          Выйти
          <Image
            src="/ui-icons/logout.svg"
            width="30"
            height="30"
            alt="logout-logo"
            priority
          />
        </Button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
