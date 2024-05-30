'use client'

import { useSelector } from 'react-redux'
import { CartItem, Headling } from '@/components'
import { TRootState } from '@/store'
import { useEffect, useState } from 'react'
import { ApiClient } from '@/api/Api'
import { TProductProps } from '@/types'

export default function Cart() {
  const items = useSelector((s: TRootState) => s.cart.items)

  const [selectedItems, setSelectedItems] = useState<TProductProps[]>([])

  useEffect(() => {
    Promise.all(
      items.map((item) => {
        return ApiClient({ url: `products/${item.id}` })
      })
    ).then((result) => {
      console.log(result)
      setSelectedItems(result as TProductProps[])
    })
  }, [items])

  return (
    <>
      <Headling>Корзина</Headling>
      {items.map((i) => {
        const product = selectedItems.find((item) => item.id === i.id)
        if (product) {
          return <CartItem key={product.id} count={i.count} {...product} />
        }
      })}
    </>
  )
}
