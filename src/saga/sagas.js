import { put, takeEvery, all, call } from 'redux-saga/effects';
import DataTransaction from "../components/data_transaction";
import {
    changeUserSuccess,
    changeUserFail,
    changeProfileSuccess,
    changeProfileFail,
    tokenCheckSuccess,
    tokenCheckFail,
    populateUsersSuccess,
    populateUsersFail,
    addUserSuccess,
    addUserFail,
    removeUserSuccess,
    removeUserFail
} from "../actions";

function* removeUserAsync(action) {
    const { data }  = yield call(DataTransaction.remove, action.data);
    console.log('data', data);
    // removedUser.then((e)=>{console.log('promise', e)});
    if(data) {
    yield put(removeUserSuccess(data));
    } else {
        yield put(removeUserFail(data));
    }
}

function* changeProfileAsync(action) {
    console.log('action', action);
        const { data } = yield call(DataTransaction.modify, action.data);
        console.log('Saga request finished' + data);
        if(data) {
            console.log(data);
        yield put(changeProfileSuccess(data));
    } else {
        yield put(changeProfileFail(data));
    }

}

function* tokenCheckAsync(action) {
    // console.log(action.token);
    const payload = yield call(DataTransaction.token, {token: action.token});
    console.log(payload.data);
    if(payload.data) {
        yield put(tokenCheckSuccess(payload.data));
    } else {
        yield put(tokenCheckFail(payload.data));
    }
}

function* populateUsersAsync() {
    console.log('Saga works');
    const data = yield call(DataTransaction.getUsers);
    console.log(data);
    const users = data.data;
    if(users) {
        yield put(populateUsersSuccess(users));
    } else {
        yield put(populateUsersFail);
    }
}

function* changeUserAsync(action) {
    console.log('Change user saga start');
    const { data } = yield call(DataTransaction.modify, action.data);
    console.log('Saga request finished');
    console.log(data);
    if(data) {
        yield put(changeUserSuccess(data));
    } else {
        yield put(changeUserFail(data));
    }
}

function* addUserAsync(action) {
    console.log('Add user saga start');
    const { data } = yield call(DataTransaction.register, action.data);
    console.log('Saga request finished');
    console.log(data);
    if(data) {
        yield put(addUserSuccess(data));
    } else {
        yield put(addUserFail(data));
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

function* changeUser() {
    yield takeEvery('CHANGE_USER', changeUserAsync);
}

function* addUser() {
    yield takeEvery('ADD_USER', addUserAsync);
}

function* rootSaga() {
    yield all([
        removeUser(),
        changeProfile(),
        tokenCheck(),
        populateUsers(),
        changeUser(),
        addUser()
    ]);
}

export default rootSaga;