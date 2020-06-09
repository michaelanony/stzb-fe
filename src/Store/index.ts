import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducer/reducer'

import createSagaMiddleware from "redux-saga";

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
)

const store = createStore(
    reducer,
    enhancer
)



export type AppState = ReturnType<typeof reducer>;
export default store;