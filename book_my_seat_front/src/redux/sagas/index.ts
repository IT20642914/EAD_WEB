import { all } from "redux-saga/effects";
import alertSaga from "./alert.saga";


export default function* rootSaga() {
  yield all([
    alertSaga(),

  ]);
}
