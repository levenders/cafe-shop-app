import { FC } from 'react'
import Image from 'next/image'
import styles from './ProductCard.module.css'
import { priceRu } from '@/helpers'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { TAppDispatch } from '@/store'
import { cartActions } from '@/store/cart.slice'

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
          <Image
            src="/ui-icons/plus.svg"
            width="25"
            height="25"
            alt="add-to-cart-button"
          />
        </button>
        <div className={styles.rating}>
          {rating}
          <Image
            src="/ui-icons/star.svg"
            width="14"
            height="14"
            alt="rating-star"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </Link>
  )
}
