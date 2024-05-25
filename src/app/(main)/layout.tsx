'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cn from 'classnames'
import styles from './layout.module.css'
import { Button } from '@/components/Button'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

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
            />
            Корзина
          </Link>
        </div>
        <Button className={styles.logout}>
          Выйти
          <Image
            src="/ui-icons/logout.svg"
            width="30"
            height="30"
            alt="logout-logo"
          />
        </Button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
