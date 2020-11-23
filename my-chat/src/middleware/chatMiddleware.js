import {SEND_MESSAGE, ADD_MESSAGE} from '../constants/ActionTypes';
import {sendMessage} from '../actions/index'
import io from 'socket.io-client'

const chatMiddleware = store => next => action => {
    const state = store.getState()
    if(action.type === SEND_MESSAGE) {
        const socket = state.socket.socket
        socket.emit('chat', {
            message: action.payload.message,
            handle: action.payload.handle
        })
    }
    if (action.type === ADD_MESSAGE) {

    }
    next(action)
}

export default chatMiddleware;