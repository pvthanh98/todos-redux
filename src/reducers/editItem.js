import * as types from "../constants/ActionType";

var initState = null;

var myReducer = (state = initState, action) => {
	switch (action.type) {
		case types.EDIT_TASk:
			if (action.task) {
				var newState = {
					id: action.task.id,
					name: action.task.name,
					status: action.task.status,
				};
			} else return null
			return newState;
		default:
			return state;
	}
};

export default myReducer;
