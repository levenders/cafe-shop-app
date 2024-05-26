'use client'

import { FormEvent, useActionState, useState } from 'react'
import Link from 'next/link'
import { Button, Headling, Input } from '@/components'
import styles from './login.module.css'
import type { TAuthResponse, TLoginForm } from '@/types'
import { ApiClient } from '@/api/Api'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { TAppDispatch } from '@/store'
import { userActions } from '@/store/user.slice'

export default function Login() {
  const [error, setError] = useState<string | null>()

  const { replace } = useRouter()

  const dispatch = useDispatch<TAppDispatch>()

  const submit = (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    const target = e.target as typeof e.target & TLoginForm
    const { email, password } = target

    ApiClient<TAuthResponse>({
      url: 'auth/login',
      method: 'POST',
      body: { email: email.value, password: password.value },
    })
      .then((data) => {
        console.log(data.access_token)
        dispatch(userActions.addToken(data.access_token))
        replace('/menu')
      })
      .catch((error) => setError('Неверный логин или пароль'))
  }

  return (
    <div className={styles.wrapper}>
      <Headling>Вход</Headling>
      {error && <div className={styles.error}> {error} </div>}
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.inputLabel}>
            Ваш email
          </label>
          <Input placeholder="Email" id="email" name="email" />
        </div>
        <div className={styles.field}>
          <label htmlFor="password" className={styles.inputLabel}>
            Ваш пароль
          </label>
          <Input
            placeholder="Пароль"
            id="password"
            name="password"
            type="password"
          />
        </div>
        <Button appearance="big" className={styles.button}>
          ВХОД
        </Button>
      </form>
      <div className={styles.footer}>
        <p className={styles.questionTitle}>Нет аккаунта?</p>
        <Link href="/register" className={styles.link}>
          Зарегистрироваться
        </Link>
      </div>
    </div>
  )
}
