import { put, takeEvery, all } from 'redux-saga/effects';
import DataTransaction from "../components/data_transaction";
import { REMOVE_USER_SUCCESS,
    REMOVE_USER_FAIL,
    REMOVE_USER,
    CHANGE_PROFILE,
    CHANGE_PROFILE_SUCCESS,
    CHANGE_PROFILE_FAIL
} from "../actions/index";

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
    try {
        const user = yield DataTransaction.modify(action.data);
        console.log(user);
        yield put({type: 'CHANGE_PROFILE_SUCCESS', data: user});
    } catch (e) {
        yield put({type: 'CHANGE_PROFILE_FAIL', error: e.message});
    }
}

function* changeProfile() {
    yield takeEvery('CHANGE_PROFILE', changeProfileAsync);
}

function* removeUser() {
    yield takeEvery('REMOVE_USER', removeUserAsync);
}

export default function* rootSaga() {
    yield all([
        removeUser,
        changeProfile
    ]);
}