import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    profileReducer,
    usersReducer
});

/*

- редактрование, добавление, удаление пользователей
- пароль от пользователя не присылаем, и вообще он должен храниться в нашей бд в хешированом виде

 */