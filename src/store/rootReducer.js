import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { productsReducer } from "./products/productsReducer";
import { cartReducer } from "./cart/cartReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});
