import {
    ADD_USER_SUCCESS,
    ADD_USER_FAIL,
    REMOVE_USER_SUCCESS,
    REMOVE_USER_FAIL,
    POPULATE_USERS_SUCCESS,
    POPULATE_USERS_FAIL
} from '../constants/index';

const initialState = [];

function usersReducer(state = initialState, action) {
    switch(action.type) {
        case REMOVE_USER_SUCCESS:
            for (let i = 0; i < state.length; i++) {
                if (state[i].token === action.data.token) {
                    const removed = state.splice(i, 1);
                    return state
                }
            } return state;
        case ADD_USER_SUCCESS:
            return [...state, action.data];
        case ADD_USER_FAIL:
            return state;
        case POPULATE_USERS_SUCCESS: // NOT FINISHED
                const newState = action.payload.map(function (elem) {
                    return elem;
                });
                return [...newState];
        case POPULATE_USERS_FAIL:
            return state;
        default:
            return state;
    }
}

export default usersReducer;