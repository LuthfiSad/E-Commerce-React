import { legacy_createStore as createStore } from "redux";

// reducer
const cartReducer = (
  state = {
    cart: [
      {
        id: 1,
        qty: 1,
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.cart.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + action.payload.qty }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store
const store = createStore(cartReducer);
console.log("oncreate store : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("store changed : ", store.getState());
})

// dispatch
const action1 = {
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    qty: 20,
  },
};
store.dispatch(action1);

const action2 = {
  type: "ADD_TO_CART",
  payload: {
    id: 1,
    qty: 20,
  },
};
store.dispatch(action2);
