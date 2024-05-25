'use client'

import { useEffect, useState } from 'react'

import { Headling, Search } from '@/components'
import type { TProductProps } from '@/types'

import styles from './Menu.module.css'
import { ApiClient } from '@/api/Api'
import { ProductList } from '@/components'

export default function Menu() {
  const [products, setProducts] = useState<TProductProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    ApiClient<TProductProps[]>({ url: 'products' })
      .then((data) => setProducts(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <div className={styles.head}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав"></Search>
      </div>
      <div>
        {loading && <p>Загрузка меню...</p>}
        {error && <p>Упс...произошла ошибка</p>}
        <ProductList products={products} />
      </div>
    </>
  )
}
