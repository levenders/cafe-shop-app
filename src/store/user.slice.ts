import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TUserState } from '@/types'
import { createCookie, deleteCookie, getCookie } from '@/helpers'

const initialState: TUserState = {
  token: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      createCookie(action.payload)
    },
    logout: (state) => {
      state.token = null
      deleteCookie()
    },
  },
})

export default userSlice.reducer
export const userActions = userSlice.actions
