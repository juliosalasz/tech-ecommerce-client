import createAction from "../../utils/reducer/reducerUtils";
import { PRODUCT_ACTION_TYPES } from "./productTypes";

export const setProduct = (products) =>
  createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS, products);
