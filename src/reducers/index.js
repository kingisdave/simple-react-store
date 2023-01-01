import { ADD_USER } from '../constants/action-types';

const initialState = {
	users: []
}

function rootReducer(state = initialState, action) {
	console.log(action);
	if (action.type === ADD_USER) {
		return Object.assign({}, state, {
			users: state.users.concat(action.payload)
		})
	}
	console.log(state);
	return state;
}

export default rootReducer;