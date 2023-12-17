import { createReducer, createAction, configureStore } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
    builder
      .addCase(addToCart, (state, action) => {
        if (state.find((item) => item.id === action.payload.id)) {
          return state.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + action.payload.qty }
              : item
          );
        } else {
          state.push(action.payload);
        }
      })
  }
)

const login = createAction("CREATE_SESSION");

const loginRecuer = createReducer({status: false}, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.status = true;
    })
})

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginRecuer
  }
})
console.log("oncreate store : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("store changed : ", store.getState());
})

store.dispatch(addToCart({ id: 1, qty: 1 }));
store.dispatch(addToCart({ id: 1, qty: 1 }));
store.dispatch(addToCart({ id: 2, qty: 1 }));
store.dispatch(login());