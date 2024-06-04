'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Button, Headling, Input } from '@/components'
import { ApiClient } from '@/api/Api'

import type { TAuthResponse, TRegisterForm } from '@/types'

import styles from './register.module.css'

export default function Register() {
  const [error, setError] = useState<string | null>()

  const { replace } = useRouter()

  const submit = (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    const target = e.target as typeof e.target & TRegisterForm
    const { name, email, password } = target

    ApiClient<TAuthResponse>({
      url: 'auth/register',
      method: 'POST',
      body: { name: name.value, email: email.value, password: password.value },
    })
      .then((data) => {
        console.log(data)
        replace('/menu')
      })
      .catch((error) => setError('Такой пользователь уже существует'))
  }

  return (
    <div className={styles.wrapper}>
      <Headling>Регистрация</Headling>
      {error && <div className={styles.error}> {error} </div>}
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.inputLabel}>
            Введите ваше имя и фамилию
          </label>
          <Input placeholder="Имя и Фамилия" id="name" name="name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.inputLabel}>
            Введите ваш email
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
          Регистрация
        </Button>
      </form>
      <div className={styles.footer}>
        <p className={styles.questionTitle}>Уже есть аккаунт?</p>
        <Link href="/login" className={styles.link}>
          Войти
        </Link>
      </div>
    </div>
  )
}
