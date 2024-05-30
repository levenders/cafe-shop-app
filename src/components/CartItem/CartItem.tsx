import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { TAppDispatch } from '@/store'
import { cartActions } from '@/store/cart.slice'

import styles from './cartItem.module.css'
import { priceRu } from '@/helpers'
import Image from 'next/image'

interface ICartItemProps {
  id: number
  name: string
  image: string
  price: number
  count: number
}

export const CartItem: FC<ICartItemProps> = ({
  id,
  name,
  image,
  price,
  count,
}) => {
  const dispatch = useDispatch<TAppDispatch>()

  const removeToCart = () => {}

  const addToCart = () => {
    dispatch(cartActions.add(id))
  }

  const removeAll = () => {}

  return (
    <div className={styles.cartItem}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.desciption}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{priceRu(price)}</div>
      </div>
      <div className={styles.actions}>
        <button className={styles.button} onClick={removeToCart}>
          <Image
            src="/ui-icons/plus.svg"
            width="25"
            height="25"
            alt="remove-to-cart-button"
          />
        </button>
        <span>{count}</span>
        <button className={styles.button} onClick={addToCart}>
          <Image
            src="/ui-icons/plus.svg"
            width="25"
            height="25"
            alt="add-to-cart-button"
          />
          <button className={styles.removeAllButton} onClick={removeAll}>
            <Image
              src="/ui-icons/plus.svg"
              width="25"
              height="25"
              alt="remove-all-cart-button"
            />
          </button>
        </button>
      </div>
    </div>
  )
}
