import { put, takeEvery, all, call } from 'redux-saga/effects';
import DataTransaction from "../components/data_transaction";
import {
    changeProfileSuccess,
    changeProfileFail,
    tokenCheckSuccess,
    tokenCheckFail,
    populateUsersSuccess,
    populateUsersFail
} from "../actions";

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
    // console.log('action', action);
        const { data } = yield call(DataTransaction.modify, action.data);
        console.log('Saga request finished');
        if(data) {
            console.log(data);
        yield put(changeProfileSuccess(data));
    } else {
        yield put(changeProfileFail(data));
    }

}

function* tokenCheckAsync(action) {
    const data = yield call(DataTransaction.token, action.token);
    // console.log(data);
    if(data) {
        yield put(tokenCheckSuccess(data.data));
    } else {
        yield put(tokenCheckFail(data));
    }
}

function* populateUsersAsync() {
    console.log('Saga works');
    const data = yield call(DataTransaction.getUsers);
    const users = data.data;
    if(users) {
        yield put(populateUsersSuccess(users));
    } else {
        yield put(populateUsersFail);
    }
}

function* changeProfile() {
    yield takeEvery('CHANGE_PROFILE', changeProfileAsync);
}

function* removeUser() {
    yield takeEvery('REMOVE_USER', removeUserAsync);
}

function* tokenCheck() {
    yield takeEvery('TOKEN_CHECK', tokenCheckAsync);
}

function* populateUsers() {
    yield takeEvery('POPULATE_USERS', populateUsersAsync);
}

function* rootSaga() {
    yield all([
        removeUser(),
        changeProfile(),
        tokenCheck(),
        populateUsers()
    ]);
}

export default rootSaga;