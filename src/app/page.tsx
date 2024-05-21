import { Headling, ProductCard, Search } from '@/components'

import styles from './Menu.module.css'

export default function Menu() {
  const getMenu = async () => {
    const res = await fetch('')
  }

  return (
    <>
      <div className={styles.head}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав"></Search>
      </div>
      <div>
        <ProductCard
          id={1}
          title="Наслаждение"
          description="Салями, руккола, помидоры, оливки"
          rating={4.5}
          price={300}
          image="/product-demo.png"
        />
        <ProductCard
          id={2}
          title="Наслаждение"
          description="Салями, руккола, помидоры, оливки"
          rating={4.5}
          price={300}
          image="/product-demo.png"
        />
      </div>
    </>
  )
}
