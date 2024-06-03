'use server'

import { cookies } from 'next/headers'

export async function createCookie(token: string) {
  cookies().set('ACCESS_TOKEN', token)
}

export async function deleteCookie() {
  cookies().delete('ACCESS_TOKEN')
}
