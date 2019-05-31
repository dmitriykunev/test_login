import {
    CHANGE_PROFILE,
    CHANGE_PROFILE_SUCCESS,
    CHANGE_PROFILE_FAIL,
    ADD_USER,
    REMOVE_USER,
    POPULATE_USERS,
    REMOVE_USER_SUCCESS,
    REMOVE_USER_FAIL
} from '../constants/index';

export function addUser(payload) {
    return { type: ADD_USER, payload }
};

export function populateUsers(payload) {
    return { type: POPULATE_USERS, payload }
};

export function removeUser(payload) {
    return { type: REMOVE_USER, payload }
};

export function removeUserFail(payload) {
    return { type: REMOVE_USER_FAIL, payload }
};

export function removeUserSuccess(payload) {
    return { type: REMOVE_USER_SUCCESS, payload }
};

export function changeProfile(payload) {
    return { type: CHANGE_PROFILE, payload }
};

export function changeProfileSuccess(payload) {
    return { type: CHANGE_PROFILE_SUCCESS, payload }
};

export function changeProfileFail(payload) {
    return { type: CHANGE_PROFILE_FAIL, payload }
};

