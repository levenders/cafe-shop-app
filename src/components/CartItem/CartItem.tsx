import { useDispatch } from 'react-redux'

import { cartActions } from '@/store/cart.slice'
import { getTotalCount, priceRu } from '@/helpers'

import type { FC } from 'react'
import type { TAppDispatch } from '@/store'

import styles from './CartItem.module.css'

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

  const removeToCart = () => {
    dispatch(cartActions.remove(id))
  }

  const addToCart = () => {
    dispatch(cartActions.add(id))
  }

  const removeAll = () => {
    dispatch(cartActions.removeAll(id))
  }

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
        <button className={styles.removeButton} onClick={removeToCart}>
          <span className={styles.minusIcon}></span>
        </button>
        <span className={styles.count}>{getTotalCount(count)}</span>
        <button className={styles.addButton} onClick={addToCart}>
          <span className={styles.plusIcon}></span>
        </button>
        <button className={styles.removeAllButton} onClick={removeAll}>
          <span className={styles.crossIcon}></span>
        </button>
      </div>
    </div>
  )
}
