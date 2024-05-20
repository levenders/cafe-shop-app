'use client'

import type { Metadata } from 'next'
import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

import styles from './layout.module.css'
import { Button } from '@/components/Button'
import cn from 'classnames'
import { usePathname } from 'next/navigation'

const openSans = Open_Sans({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Cafe Shop',
//   description: 'My pet-project for learning',
// } ругается пока что почему то

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
              />
              <div className={styles.name}>Иван Иванов</div>
              <div className={styles.email}>ivanivano@ya.ru</div>
            </div>
            <div className={styles.menu}>
              <Link
                href="/"
                className={cn(styles.link, {
                  [styles.active]: pathname === '/',
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
          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}
