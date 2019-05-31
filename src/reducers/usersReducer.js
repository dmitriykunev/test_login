import {
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAIL,
    REMOVE_USER,
    REMOVE_USER_SUCCESS,
    REMOVE_USER_FAIL,
    POPULATE_USERS,
    POPULATE_USERS_SUCCESS,
    POPULATE_USERS_FAIL,
    POPULATE_PROFILE,
    POPULATE_PROFILE_SUCCESS,
    POPULATE_PROFILE_FAIL
} from '../constants/index';

const initialState = [];

function usersReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_USER:
            return [...state, action.data];
        case REMOVE_USER_SUCCESS:
            for (let i = 0; i < state.length; i++) {
                if (state[i].token === action.data.token) {
                    const removed = state.splice(i, 1);
                    return state
                }
            } return state;
        // case MODIFY_USER:
        //     for (let i = 0; i <= state.length; i++) {
        //        if (state[i].token === action.data.token) {
        //            const removed = state.splice(i, 1, action.data);
        //            return state
        //        }
        //     } return state;
        case POPULATE_USERS: // NOT FINISHED
            return (state.length <= 1 ) ? [...state, action.data] : state;
        default:
            return state;
    }
}

export default usersReducer;