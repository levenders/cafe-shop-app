'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

import { Button, CartItem, Headling } from '@/components'
import { ApiClient } from '@/api/Api'
import { priceRu } from '@/helpers'

import type { TProductProps } from '@/types'
import type { TRootState } from '@/store'

import styles from './Cart.module.css'

const DELIVERY_PRICE = 169

export default function Cart() {
  const items = useSelector((s: TRootState) => s.cart.items)

  const [selectedItems, setSelectedItems] = useState<TProductProps[]>([])

  const { replace } = useRouter()

  const sum = items
    .map((i) => {
      const product = selectedItems.find((item) => item.id === i.id)
      if (!product) {
        return 0
      }
      return i.count * product.price
    })
    .reduce((sum, curr) => (sum = curr + sum), 0)

  const checkout = () => {
    ApiClient({
      url: 'order',
      method: 'POST',
      body: { products: items },
    }).then((result) => {
      console.log(result)
    })
    replace('/success')
  }

  useEffect(() => {
    Promise.all(
      items.map((item) => {
        return ApiClient({ url: `products/${item.id}` })
      })
    ).then((result) => {
      setSelectedItems(result as TProductProps[])
    })
  }, [items])

  return (
    <>
      <Headling className={styles.headling}>Корзина</Headling>
      {items.map((i) => {
        const product = selectedItems.find((item) => item.id === i.id)
        if (product) {
          return <CartItem key={product.id} count={i.count} {...product} />
        }
      })}
      <div className={styles.line}>
        <h3 className={styles.text}>Сумма</h3>
        <span className={styles.price}>{priceRu(sum)}</span>
      </div>
      <hr className={styles.hr} />
      <div className={styles.line}>
        <h3 className={styles.text}>Доставка</h3>
        <span className={styles.price}>{priceRu(DELIVERY_PRICE)}</span>
      </div>
      <hr className={styles.hr} />
      <div className={styles.line}>
        <div className={styles.totalText}>
          <h3 className={styles.text}>Итог</h3>
          <p className={styles.count}>({items.length})</p>
        </div>
        <span className={styles.price}>{priceRu(sum + DELIVERY_PRICE)}</span>
      </div>
      <div className={styles.checkout}>
        <Button appearance="big" onClick={checkout}>
          Оформить
        </Button>
      </div>
    </>
  )
}
