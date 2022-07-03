import { PRODUCT_ACTION_TYPES } from "./productTypes";
import createAction from "../../utils/reducer/reducerUtils";
import { getProducts } from "../../api/Api";

export const setProduct = (products) =>
  createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS, products);

export const fetchProductStart = () =>
  createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchProductSuccess = (products) =>
  createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, products);

export const fetchProductFailed = (error) =>
  createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);

export const fetchProductsAsync = () => async (dispatch) => {
  dispatch(fetchProductStart());
  try {
    const productMap = await getProducts();
    fetchProductSuccess(productMap);
  } catch (error) {
    dispatch(fetchProductFailed(error));
  }
};
