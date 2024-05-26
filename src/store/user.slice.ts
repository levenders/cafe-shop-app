import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type TUserState = {
  token: string | null
}

const initialState: TUserState = {
  token: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    logout: (state) => {
      state.token = null
    },
  },
})

export default userSlice.reducer
export const userActions = userSlice.actions
