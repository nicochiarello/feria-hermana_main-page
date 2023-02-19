import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    cart: [],
    status: false,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, item) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.cart.push(item.payload);
    },
    remove: (state, item) => {
      let filteredCart = state.value.cart.filter((i) => i.id !== item.payload.id);
      state.value.cart = filteredCart;
    },
    modifyStatus: (state)=>{
      state.value.status = !state.value.status
    },
    emptyCart: (state)=>{
      state.value.cart = []
    }
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },

});

// Action creators are generated for each case reducer function
export const { add, remove, modifyStatus, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
