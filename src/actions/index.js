import {
    CHANGE_PROFILE_NAME,
    CHANGE_PROFILE_EMAIL,
    CHANGE_PROFILE_INFO,
    CHANGE_PROFILE_PASSWORD,
    CHANGE_PROFILE_TOKEN
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