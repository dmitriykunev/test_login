import { ADD_LOGIN, ADD_PASSWORD } from '../constants/index';

export function addLogin(payload) {
    return { type: ADD_LOGIN, payload }
};

export function addPassword(payload) {
    return { type: ADD_PASSWORD, payload }
};