import {combineReducers} from 'redux';
import messageReducer from './messageReducer';
import socketReducer from './socketReducer';


const rootReducer =  combineReducers({
    message: messageReducer,
    socket: socketReducer,
})

export default rootReducer;