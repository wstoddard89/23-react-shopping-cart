import { createSlice } from "@reduxjs/toolkit"


export const cartSlice = createSlice({
  name:"cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = {...action.payload}
      const foundItem = state.cartItem.find((item) => item.id === newItem.id)
      if (foundItem) {
        console.log(newItem)
        foundItem.quantity = foundItem.quantity + 1
        state.cartItem = state.cartItem.map(item => item.id === foundItem.id ? foundItem : item)
      } else {
        state.cartItem.push({ ...newItem, quantity: 1 })
      }
    },
    deleteItem: (state, action) => {
      state.cartItem = state.cartItem.filter((cart) => cart.id !== action.payload)
    },
    addQuantity: (state, action) => {
      const newItem = {...action.payload}
      const foundItem = state.cartItem.find((item) => item.id === newItem.id)
      if (foundItem) {
        console.log(newItem)
        foundItem.quantity = foundItem.quantity + 1
        state.cartItem = state.cartItem.map(item => item.id === foundItem.id ? foundItem : item)
      } else {
        state.cartItem.push({ ...newItem, quantity: 1 })
      }
    },
    subtractQuantity: (state, action) => {
     
      const newItem = {...action.payload}
      const foundItem = state.cartItem.find((item) => item.id === newItem.id)
      if (foundItem) {
        console.log(newItem)
        foundItem.quantity = foundItem.quantity - 1
        state.cartItem = state.cartItem.map(item => item.id === foundItem.id ? foundItem : item)
      } else {
        state.cartItem.push({ ...newItem, quantity: 1 })
      }
    },
  }
})

export const { addItem, deleteItem, addQuantity, subtractQuantity } = cartSlice.actions

//import to Products.js
export const selectCart = (state) => state.cart.cartItem

//import to app/store.js
export default cartSlice.reducer