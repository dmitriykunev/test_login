import {
    CHANGE_PROFILE,
    CHANGE_PROFILE_SUCCESS,
    CHANGE_PROFILE_FAIL,
    CHANGE_USER,
    CHANGE_USER_SUCCESS,
    CHANGE_USER_FAIL,
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAIL,
    POPULATE_PROFILE,
    POPULATE_PROFILE_SUCCESS,
    POPULATE_PROFILE_FAIL,
    REMOVE_USER,
    POPULATE_USERS,
    REMOVE_USER_SUCCESS,
    REMOVE_USER_FAIL,
    TOKEN_CHECK,
    TOKEN_CHECK_SUCCESS,
    TOKEN_CHECK_FAIL,
    POPULATE_USERS_SUCCESS,
    POPULATE_USERS_FAIL,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAIL,
    LOGOUT
} from '../constants/index';

export function logout() {
    return {type: LOGOUT}
};

export function addUser(payload) {
    return {type: ADD_USER, payload}
};

export function addUserSuccess(payload) {
    return {type: ADD_USER_SUCCESS, payload}
};

export function addUserFail(payload) {
    return {type: ADD_USER_FAIL, payload}
};

export function populateUsers(payload) {
    return {type: POPULATE_USERS, payload}
};

export function populateUsersSuccess(payload) {
    return {type: POPULATE_USERS_SUCCESS, payload}
};

export function populateUsersFail(payload) {
    return {type: POPULATE_USERS_FAIL, payload}
};

export function removeUser(payload) {
    return {type: REMOVE_USER, payload}
};

export function removeUserFail(payload) {
    return {type: REMOVE_USER_FAIL, payload}
};

export function removeUserSuccess(payload) {
    return {type: REMOVE_USER_SUCCESS, payload}
};

export function changeUser(payload) {
    return {type: CHANGE_USER, payload}
};

export function changeUserSuccess(payload) {
    return {type: CHANGE_USER_SUCCESS, payload}
};

export function changeUserFail(payload) {
    return {type: CHANGE_USER_FAIL, payload}
};

export function changeProfile(payload) {
    return {type: CHANGE_PROFILE, payload}
};

export function changeProfileSuccess(payload) {
    return {type: CHANGE_PROFILE_SUCCESS, payload}
};

export function changeProfileFail(payload) {
    return {type: CHANGE_PROFILE_FAIL, payload}
};

export function tokenCheck(payload) {
    return {type: TOKEN_CHECK, payload}
};

export function tokenCheckSuccess(payload) {
    return {type: TOKEN_CHECK_SUCCESS, payload}
};

export function tokenCheckFail(payload) {
    return {type: TOKEN_CHECK_FAIL, payload}
};

export function populateProfile(payload) {
    return {type: POPULATE_PROFILE, payload}
};

export function populateProfileSuccess(payload) {
    return {type: POPULATE_PROFILE_SUCCESS, payload}
};

export function populateProfileFail(payload) {
    return {type: POPULATE_PROFILE_FAIL, payload}
};

export function signUpUserSuccess(payload) {
    return {type: SIGNUP_USER_SUCCESS, payload}
};

export function signUpUserFail(payload) {
    return {type: SIGNUP_USER_FAIL, payload}
};

