import { Headling } from '@/components/Headling'
import { Search } from '@/components/Search'

import styles from './Menu.module.css'

export default function Menu() {
  return (
    <div className={styles.head}>
      <Headling>Меню</Headling>
      <Search placeholder="Введите блюдо или состав"></Search>
    </div>
  )
}
