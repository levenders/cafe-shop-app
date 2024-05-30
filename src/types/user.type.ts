export type TUserState = {
  token: string | null
  profile?: TProfile
}

export type TProfile = {
  id: number
  email: string
  address: string
  name: string
  phone: string
}
