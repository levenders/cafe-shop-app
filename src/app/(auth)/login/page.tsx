'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

import { Button, Headling, Input } from '@/components'
import { ApiClient } from '@/api/Api'
import { userActions } from '@/store/user.slice'

import type { TAppDispatch } from '@/store'
import type { TAuthResponse, TLoginForm } from '@/types'

import styles from './login.module.css'

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
        dispatch(userActions.addToken(data.access_token))
        replace('/menu')
      })
      .catch(() => setError('Неверный логин или пароль'))
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
