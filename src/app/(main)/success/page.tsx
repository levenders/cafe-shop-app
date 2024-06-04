'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

import { Button } from '@/components'
import { cartActions } from '@/store/cart.slice'

import type { TAppDispatch } from '@/store'

import styles from './Success.module.css'

export default function Success() {
  const { replace } = useRouter()
  const dispatch = useDispatch<TAppDispatch>()

  const toNewOrder = () => {
    replace('menu')
    dispatch(cartActions.toNewOrder())
  }

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="/ui-images/pizza.png"
        width="384"
        height="384"
        alt="pizza"
        priority={true}
      />
      <div className={styles.text}>Ваш заказ успешно оформлен!</div>
      <Button appearance="big" onClick={toNewOrder}>
        Сделать новый
      </Button>
    </div>
  )
}
