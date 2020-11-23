import * as types from '../constants/ActionTypes'


export const addMessage = (data) => dispatch => {
	dispatch({
		type: types.ADD_MESSAGE,
		payload: data
	})
}

export const sendMessage = (data) => dispatch => {
	dispatch({
		type : types.SEND_MESSAGE,
		payload: data
	})
}

export const addUser = (data) => dispatch => {
	dispatch({
		type: types.ADD_USER,
		payload: data
	})
}

export const populateUsersList = (data) => dispatch => {
	dispatch({
		type: types.USERS_LIST,
		payload: data
	})
}
export const setName = (data) => dispatch => {
	dispatch({
		type: types.ADD_NAME,
    	payload: data
	})
}
export const setRoom = (data) => dispatch => {
	dispatch({
		type: types.ADD_ROOM,
    	payload: data
	})
}

export const openWebsocket = (endpoint) => dispatch => {
	dispatch({
	  type: OPEN_WEBSOCKET,
	  payload: endpoint
	})
  }
  
  export const updateSocketObject = (socket) => dispatch => {
	dispatch({
	  type: UPDATE_SOCKET_OBJECT,
	  payload: socket
	})
  }