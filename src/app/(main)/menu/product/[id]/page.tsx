'use client'

import { ApiClient } from '@/api/Api'
import type { TProductProps } from '@/types'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import styles from './cardPage.module.css'
import { Button, Headling } from '@/components'
import { priceRu } from '@/helpers'

export default function CardPage() {
  const [product, setProduct] = useState<TProductProps>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const { id } = useParams()

  const { back } = useRouter()

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
      {product && (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.title}>
              <button className={styles.backButton} onClick={() => back()}>
                <span className={styles.backIcon}></span>
              </button>
              <Headling>{product.name}</Headling>
            </div>
            <Button className={styles.addButton}>
              <span className={styles.cartIcon}></span>В корзину
            </Button>
          </div>
          <div className={styles.body}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            <div className={styles.description}>
              <div className={styles.price}>
                <span>
                  <b>Цена:</b>
                </span>
                <span>{priceRu(product.price)}</span>
              </div>
              <div className={styles.rate}>
                <span>
                  <b>Рейтинг:</b>
                </span>
                <span>{product.rating}</span>
              </div>
              <div className={styles.ingredients}>
                <span>
                  <b>Состав:</b>
                </span>
                <ul>
                  {product.ingredients.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
