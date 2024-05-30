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
  const [filter, setFilter] = useState<string>('')

  const filterProducts = (
    products: TProductProps[],
    filter: string
  ): TProductProps[] => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    )
  }

  useEffect(() => {
    ApiClient<TProductProps[]>({
      url: 'products',
    })
      .then((data) => {
        if (!filter) setProducts(data)
        setProducts(filterProducts(data, filter))
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [filter])

  return (
    <>
      <div className={styles.head}>
        <Headling>Меню</Headling>
        <Search
          placeholder="Введите блюдо или состав"
          onChange={(e) => {
            setFilter(e.target.value)
          }}
        ></Search>
      </div>
      <div>
        {loading && <p>Загрузка меню...</p>}
        {error && <p>Упс...произошла ошибка</p>}
        <ProductList products={products} />
      </div>
    </>
  )
}
