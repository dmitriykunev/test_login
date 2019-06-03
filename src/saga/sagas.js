import { put, takeEvery, all } from 'redux-saga/effects';
import DataTransaction from "../components/data_transaction";

function* removeUserAsync(action) {
    console.log(action.data);
    try {
    const users = yield DataTransaction.remove(action.data);
    yield put({type: 'REMOVE_USER_SUCCESS', data: users});
    } catch (e) {
        yield put({type: 'REMOVE_USER_FAIL', error: e.message});
    }
}

function* changeProfileAsync(action) {
    console.log('action', action);
    try {
        const user = yield DataTransaction.modify(action.payload);
        console.log('Saga request finished');
        yield put({type: 'CHANGE_PROFILE_SUCCESS', data: user});
        yield this.props.dispatch({
            type: 'CHANGE_PROFILE_SUCCESS',
            data: user
            });
    } catch (e) {
        yield put({type: 'CHANGE_PROFILE_FAIL', error: e.message});
        yield this.props.dispatch({
            type: 'CHANGE_PROFILE_FAIL',
            error: e.message
        });
    }
}

function* changeProfile() {
    yield takeEvery('CHANGE_PROFILE', changeProfileAsync);
}

function* removeUser(payload) {
    yield takeEvery('REMOVE_USER', removeUserAsync);
}

function* rootSaga() {
    yield all([
        removeUser(),
        changeProfile()
    ]);
}

export default rootSaga;