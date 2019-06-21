import {
    LOGOUT,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAIL,
    CHANGE_PROFILE_SUCCESS,
    CHANGE_PROFILE_FAIL,
    POPULATE_PROFILE_SUCCESS,
    POPULATE_PROFILE_FAIL,
    TOKEN_CHECK_SUCCESS,
    TOKEN_CHECK_FAIL
} from '../constants/index';

const initialState = {
    userName: '',
    email: '',
    password: '',
    token: '',
    info: '',
    error: ''
};

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PROFILE_SUCCESS:
            return {
                ...state, userName: action.payload.userName,
                email: action.payload.email,
                password: action.payload.password,
                token: action.payload.token,
                info: action.payload.info
            };
        case CHANGE_PROFILE_FAIL:
            return {...state, error: 'Error happened while saving new profile data...'};
        case POPULATE_PROFILE_SUCCESS:
            return {
                ...state,
                userName: action.data.userName,
                email: action.data.email,
                password: action.data.password,
                token: action.data.token,
                info: action.data.info
            };
        case POPULATE_PROFILE_FAIL:
            return {
                ...state, error: 'Error happened while processing profile info...'
            };
        case SIGNUP_USER_SUCCESS:
            return {
                ...state,
                userName: action.data.userName,
                email: action.data.email,
                password: action.data.password,
                token: action.data.token,
                info: action.data.info
            };
        case SIGNUP_USER_FAIL:
            return {
                ...state, error: 'Error happened while processing New User Data...'
            };
        case TOKEN_CHECK_SUCCESS:
            return {...state,
                userName: action.payload.userName,
                password: action.payload.password,
                email: action.payload.email,
                token: action.payload.token,
                info: action.payload.info
            };
        case TOKEN_CHECK_FAIL:
            return {
                ...state, error: 'Error happened while processing token...'
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default profileReducer;