'use client'

import { ApiClient } from '@/api/Api'
import type { TProductProps } from '@/types'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CardPage() {
  const { id } = useParams()

  const [product, setProduct] = useState<TProductProps>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    ApiClient<TProductProps>({ url: `products/${id}` })
      .then((data) => setProduct(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <>
      {loading && <p>Загрузка товара...</p>}
      {error && <p>Упс...произошла ошибка</p>}
      {product && id}
    </>
  )
}
