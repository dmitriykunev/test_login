import {
    CHANGE_PROFILE_NAME,
    CHANGE_PROFILE_EMAIL,
    CHANGE_PROFILE_PASSWORD,
    CHANGE_PROFILE_TOKEN,
    CHANGE_PROFILE_INFO
} from '../constants/index';

const initialState = {
        userName: '',
        email: '',
        password: '',
        token: '',
        info: ''
};

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PROFILE_NAME:
            return {...state, userName: action.data };
        case CHANGE_PROFILE_EMAIL:
            return {...state, email: action.data };
        case CHANGE_PROFILE_PASSWORD:
            return {...state, password: action.data};
        case CHANGE_PROFILE_TOKEN:
            return {...state, token: action.data};
        case CHANGE_PROFILE_INFO:
            return {...state, info: action.data};
        default:
            return state;
    }
}

export default profileReducer;