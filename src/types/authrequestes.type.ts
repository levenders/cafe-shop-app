export type TLoginForm = {
  email: {
    value: string
  }
  password: {
    value: string
  }
}

export type TRegisterForm = {
  name: {
    value: string
  }
  email: {
    value: string
  }
  password: {
    value: string
  }
}

export type TAuthResponse = {
  access_token: string
}

export type TAuthResponseError = {
  message: string
  error: string
  statusCode: number
}
