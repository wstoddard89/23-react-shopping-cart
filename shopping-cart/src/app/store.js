import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../features/products/productsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
  },
});
