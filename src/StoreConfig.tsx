import { configureStore } from "@reduxjs/toolkit";
import allReducer from "Redux/rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "Saga/rootSaga";
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:allReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  })

sagaMiddleware.run(rootSaga)
export default store