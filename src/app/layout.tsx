'use client'

import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

import styles from './layout.module.css'
import { Button } from '@/components/Button'
import cn from 'classnames'
import { usePathname } from 'next/navigation'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <div className={styles.user}>
              <Image
                className={styles.avatar}
                src="/avatar.svg"
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
                <Image src="/menu.svg" width="30" height="30" alt="menu-logo" />
                Меню
              </Link>
              <Link
                href="/cart"
                className={cn(styles.link, {
                  [styles.active]: pathname === '/cart',
                })}
              >
                <Image src="/cart.svg" width="30" height="30" alt="cart-logo" />
                Корзина
              </Link>
            </div>
            <Button className={styles.logout}>
              Выйти
              <Image
                src="/logout.svg"
                width="30"
                height="30"
                alt="logout-logo"
              />
            </Button>
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </body>
    </html>
  )
}
