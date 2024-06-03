'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

import styles from './Success.module.css'
import { Button } from '@/components'
import { TAppDispatch } from '@/store'
import { cartActions } from '@/store/cart.slice'

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
