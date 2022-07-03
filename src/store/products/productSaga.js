import { takeLatest, put, all, call } from "redux-saga/effects";

//getCategoriesAndDocuments its the function that fetches the products. So from the api must be getProducts
import { getProducts } from "../../api/Api";

import { fetchProductSuccess, fetchProductFailed } from "./productsActions";
import { PRODUCT_ACTION_TYPES } from "./productTypes";

export function* fetchProductAsync() {
  try {
    const productMap = yield call(getProducts);
    yield put(fetchProductSuccess(productMap));
  } catch (error) {
    yield put(fetchProductFailed(error));
  }
}

export function* onFetchProducts() {
  yield takeLatest(
    PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START,
    fetchProductAsync
  );
}

export function* productSaga() {
  yield all([call(onFetchProducts)]);
}
