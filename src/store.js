import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // adjust the import path as needed

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
