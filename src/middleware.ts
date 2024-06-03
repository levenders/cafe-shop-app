import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const accessTokenCookie = cookies().has('ACCESS_TOKEN')
  const pathnameLogin = request.url.includes('/login')
  const pathnameRegister = request.url.includes('/login')

  if (!pathnameLogin && !pathnameRegister && !accessTokenCookie) {
    console.log(accessTokenCookie)
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/cart:path*', '/success:path*'],
}
