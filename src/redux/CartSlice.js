import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  cartItems: [],
  totalAmt: 0,
  totalQty: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialStateValue,
  reducers: {
    addItem: (state, action) => {
      const idx = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (idx != -1) state.cartItems[idx].qty += 1;
      else state.cartItems = [...state.cartItems, action.payload];
    },
    calculateTotal: (state) => {
      let total = state.cartItems.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.qty * currentItem.price;
      }, 0);
      let qty = state.cartItems.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.qty;
      }, 0);
      state.totalAmt = total;
      state.totalQty = qty;
    },
    incrementQty: (state, action) => {
      const idx = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (idx != -1) state.cartItems[idx].qty += 1;
    },
    decrementQty: (state, action) => {
      const idx = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (idx != -1) state.cartItems[idx].qty -= 1;
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
  },
});

export const cartReducer = CartSlice.reducer;

export const {
  addItem,
  removeItem,
  calculateTotal,
  decrementQty,
  incrementQty,
} = CartSlice.actions;

export default cartReducer;
