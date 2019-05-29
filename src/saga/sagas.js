import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import DataTransaction from "../components/data_transaction";
import { REMOVE_USER_SUCCESS, REMOVE_USER_FAIL, REMOVE_USER } from "../actions/index";

function* removeUser(action) {
    console.log(action.data);
    try {
    const users = yield DataTransaction.remove(action.data);
    yield put({type: 'REMOVE_USER_SUCCESS', data: users});
    } catch (e) {
        yield put({type: 'REMOVE_USER_FAIL', error: e.message});
    }
}

export function* sagas() {
    yield takeEvery('REMOVE_USER', removeUser);
    yield takeLatest('REMOVE_USER', removeUser)
}
export default sagas;