import Image from 'next/image'
import styles from './layout.module.css'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={styles.layout}>
      <div className={styles.leftSide}>
        <Image
          className={styles.logo}
          src="/ui-images/logo.png"
          width="384"
          height="384"
          alt="logo"
          priority={true}
        />
      </div>
      <div className={styles.rightSide}>{children}</div>
    </div>
  )
}
