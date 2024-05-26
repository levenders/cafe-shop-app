import { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { StoreProvider } from './StoreProvider'

const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata: Metadata = {
  title: 'cafe-shop',
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
  ],
  manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={openSans.className}>{children}</body>
      </html>
    </StoreProvider>
  )
}
