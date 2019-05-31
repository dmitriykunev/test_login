import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/index";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);


export default store;