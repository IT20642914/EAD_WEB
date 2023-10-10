import { all } from "redux-saga/effects";
import alertSaga from "./alert.saga";
import stationSaga from "./station.saga";
import trainSaga from "./train.saga";


export default function* rootSaga() {
  yield all([
    alertSaga(),
    stationSaga(),
    trainSaga(),

  ]);
}
