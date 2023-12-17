import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      if (state.find((item) => item.id === action.payload.id)) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + action.payload.qty }
            : item
        );
      } else {
        state.push(action.payload);
      }
    },
  },
});


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
})

console.log("oncreate store : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("store changed : ", store.getState());
})

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 1 }));
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 5 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 1 }));