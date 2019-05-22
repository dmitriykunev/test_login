import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    profileReducer,
    usersReducer
});

// function rootReducer(state = initialState, action) {
//     switch(action.type) {
//         case CHANGE_LOGIN:
//             return {...state, userName: action.data};//Object.assign({}, state, {userName: state.userName.concat(action.data)});
//         case CHANGE_PASSWORD:
//             return {...state, password: action.data};//Object.assign({}, state, {password: state.password.concat(action.data)});
//         case CHANGE_EMAIL:
//             return {...state, email: action.data};
//         default:
//             return state;
//     }
// }


/*

- редактрование, добавление, удаление пользователей
- работа с списком пользователей через редакс
- форма логина не должна хранить свои данные в редакте (зачем?)
- после того, как авторизировались, сервер присылает полную информацию о пользователе, которую мы записываем в редакс
- пароль от пользователя не присылаем, и вообще он должен храниться в нашей бд в хешированом виде
- редьюсеры стоит разбить на под-редьюсеры, а не использовать root
- для бэка подключить nodeamon для автоматического рестарта при изменении файлов
- посмотреть в сторону материал юи

 */