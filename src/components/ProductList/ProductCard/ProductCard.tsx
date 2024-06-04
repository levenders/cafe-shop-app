import Link from 'next/link'
import { useDispatch } from 'react-redux'

import { cartActions } from '@/store/cart.slice'
import { priceRu } from '@/helpers'

import type { TAppDispatch } from '@/store'
import type { FC } from 'react'

import styles from './ProductCard.module.css'
interface IProductCardProps {
  id: number
  name: string
  description: string
  image: string
  price: number
  rating: number
}

export const ProductCard: FC<IProductCardProps> = ({
  id,
  name,
  description,
  image,
  price,
  rating,
}) => {
  const dispatch = useDispatch<TAppDispatch>()

  const addToCart = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    dispatch(cartActions.add(id))
  }

  return (
    <Link href={`/menu/product/${id}`} className={styles.card}>
      <div
        className={styles.header}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.price}>{priceRu(price)}</div>
        <button className={styles['add-to-cart']} onClick={addToCart}>
          <span className={styles.plusIcon}></span>
        </button>
        <div className={styles.rating}>
          {rating}
          <span className={styles.rateIcon}></span>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </Link>
  )
}
