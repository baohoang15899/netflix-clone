import { all } from "@redux-saga/core/effects";
import authSaga from "./authSaga";

export default function* rootSaga() {
    yield all([
        authSaga()
    ])
    // code after all-effect
  }
  