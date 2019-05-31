import {
    CHANGE_PROFILE_SUCCESS,
    CHANGE_PROFILE_FAIL,
    POPULATE_PROFILE
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
            return {...state, userName: action.data.userName,
                email: action.data.email,
                password: action.data.password,
                token: action.data.token,
                info: action.data.info};
        case CHANGE_PROFILE_FAIL:
            return {...state, error: 'Error happened while saving new profile data...'};
        case POPULATE_PROFILE:
            return {...state,
                userName: action.data.userName,
                email: action.data.email,
                password: action.data.passwd,
                token: action.data.token,
                info: action.data.info
            };
        default:
            return state;
    }
}

export default profileReducer;