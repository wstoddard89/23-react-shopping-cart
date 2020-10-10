import { createSlice } from "@reduxjs/toolkit"


export const cartSlice = createSlice({
  name:"cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItem.push(action.payload)
    },
    deleteItem: (state, action) => {
      state.cartItem = state.cartItem.filter((cart) => cart.id !== action.payload)
    },
  }
})

export const { addItem, deleteItem } = cartSlice.actions

//import to Products.js
export const selectCart = (state) => state.cart.cartItem

//import to app/store.js
export default cartSlice.reducer