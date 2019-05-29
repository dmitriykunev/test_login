import {
    ADD_USER,
    REMOVE_USER_SUCCESS,
    MODIFY_USER,
    POPULATE_USERS
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
        case MODIFY_USER:
            for (let i = 0; i <= state.length; i++) {
               if (state[i].token === action.data.token) {
                   const removed = state.splice(i, 1, action.data);
                   return state
               }
            } return state;
        case POPULATE_USERS: // NOT FINISHED
            return (state.length <= 1 ) ? [...state, action.data] : state;
        default:
            return state;
    }
}

export default usersReducer;