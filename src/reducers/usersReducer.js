import {
    ADD_USER_SUCCESS,
    ADD_USER_FAIL,
    REMOVE_USER_SUCCESS,
    REMOVE_USER_FAIL,
    CHANGE_USER_SUCCESS,
    CHANGE_USER_FAIL,
    POPULATE_USERS_SUCCESS,
    POPULATE_USERS_FAIL
} from '../constants/index';

const initialState = [];

function usersReducer(state = initialState, action) {
    switch(action.type) {
        case REMOVE_USER_SUCCESS:
            // const removeUserState = state.map(function(elem) {
            //     if(elem.token !== action.payload.token)
            //         return elem;
            // });
           return [...state.filter((elem) => elem.token !== action.payload.token )];
        case REMOVE_USER_FAIL:
            return state;
        case ADD_USER_SUCCESS:
            const addNewUserState = state.map(function(elem) {
                return elem;
            });
            addNewUserState.splice(state.length, 0, action.payload);
            return [...addNewUserState];
        case ADD_USER_FAIL:
            return state;
        case CHANGE_USER_SUCCESS:
            for (let i = 0; i < state.length; i++) {
                if (state[i].token === action.payload.token) {
                    const removed = state.splice(i, 1, action.payload);
                    return state;
                }};
        case CHANGE_USER_FAIL:
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