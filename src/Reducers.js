import { combineReducers } from 'redux'; // para combinar todos os meus reducer em um só
import userReducer from './Reducers/userReducer'; 

export default combineReducers({
    user: userReducer
});