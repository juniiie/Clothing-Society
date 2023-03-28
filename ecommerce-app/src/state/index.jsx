import { createSlice } from "@reduxjs/toolkit";

// initialState is the state at which the app will start with when you open up the app
const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

// Redux State
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  //   Reducers are functions that update the state of a specific "slice" of the redux store
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    // This filters out the item that matches the id passed in the payload.
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }

        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }

        return item;
      });
    },

    // Flips the current state is
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

// This exports the reducer functions created
export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
