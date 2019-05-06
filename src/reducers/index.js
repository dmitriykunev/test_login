import { ADD_LOGIN, ADD_PASSWORD } from '../constants/index';

const initialState = {
    userName: [],
    password: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_LOGIN && action.type === ADD_PASSWORD) {
        return Object.assign({}, state, {
            userName: state.userName.concat(action.payload.userName),
            password: state.password.concat(action.payload.password)
        });
    }
    return state;
}

export default rootReducer;