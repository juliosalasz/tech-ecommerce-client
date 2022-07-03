import { all, call } from "redux-saga/effects";
import { productSaga } from "./products/productSaga";
import { userSagas } from "./user/userSaga";
//we ae missing produt saga

export function* rootSaga() {
  yield all([call(productSaga), call(userSagas)]);
}
