import { createSlice } from "@reduxjs/toolkit"


export const cartSlice = createSlice({
  name:"cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = {...action.payload}
      // let quantity = 1
      const foundItem = state.cartItem.find((item) => item.id == newItem.id)
      if (foundItem) {
        console.log(newItem)
        foundItem.quantity = foundItem.quantity + 1
        state.cartItem = state.cartItem.map(item => item.id === foundItem.id ? foundItem : item)
      } else {
        state.cartItem.push({ ...newItem, quantity: 1 })
      }
      // newItem.quantity = quantity
      // state.cartItem.push(newItem)
      // state.cartItem = state.cartItem.map(item => item.id === newItem.id ? newItem : item)
      
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