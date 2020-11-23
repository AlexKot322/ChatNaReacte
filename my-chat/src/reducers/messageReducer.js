import * as types from '../constants/ActionTypes'

const initialState = {
	data: [],
}

export default function (state = initialState, action) {
	switch(action.type) {
		case types.ADD_MESSAGE:
			return {...state,
				data: [...state.data, action.message]
			}
		case types.SEND_MESSAGE:
			return {...state,
				data: [...state.data, action.message]
			}
		default: 
		return state
	}
}