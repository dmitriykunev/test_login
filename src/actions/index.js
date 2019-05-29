import {
    CHANGE_PROFILE_NAME,
    CHANGE_PROFILE_EMAIL,
    CHANGE_PROFILE_INFO,
    CHANGE_PROFILE_PASSWORD,
    CHANGE_PROFILE_TOKEN,
    ADD_USER,
    REMOVE_USER,
    MODIFY_USER,
    POPULATE_USERS,
    REMOVE_USER_SUCCESS,
    REMOVE_USER_FAIL
} from '../constants/index';

export function changeProfileName(payload) {
    return { type: CHANGE_PROFILE_NAME, payload }
};

export function changeProfileEmail(payload) {
    return { type: CHANGE_PROFILE_EMAIL, payload }
};

export function changeProfilePassword(payload) {
    return { type: CHANGE_PROFILE_PASSWORD, payload }
};

export function changeProfileToken(payload) {
    return { type: CHANGE_PROFILE_TOKEN, payload }
};

export function changeProfileInfo(payload) {
    return { type: CHANGE_PROFILE_INFO, payload }
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

