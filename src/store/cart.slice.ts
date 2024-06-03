import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type TCartItem = {
  id: number
  count: number
}

export interface ICartState {
  items: TCartItem[]
}

const initialState: ICartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toNewOrder: (state) => {
      state.items = []
    },
    removeAll: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      const exisitingItem = state.items.find((i) => i.id === action.payload)
      if (!exisitingItem) {
        return
      }
      if (exisitingItem.count === 1) {
        state.items = state.items.filter((i) => i.id !== action.payload)
      } else {
        state.items.map((i) => {
          if (i.id === action.payload) i.count -= 1

          return i
        })
        return
      }
    },
    add: (state, action: PayloadAction<number>) => {
      const exisitingItem = state.items.find((i) => i.id === action.payload)
      if (!exisitingItem) {
        state.items.push({ id: action.payload, count: 1 })
        return
      }
      state.items.map((i) => {
        if (i.id === action.payload) {
          i.count += 1
        }
        return i
      })
    },
  },
})

export default cartSlice.reducer
export const cartActions = cartSlice.actions
