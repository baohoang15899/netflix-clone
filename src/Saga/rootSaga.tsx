import { all } from "@redux-saga/core/effects";
import authSaga from "./authSaga";
import homeSaga from "./homeSaga";

export default function* rootSaga() {
    yield all([
        authSaga(),
        homeSaga()
    ])
    // code after all-effect
  }
  