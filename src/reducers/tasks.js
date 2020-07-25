import * as types from "../constants/ActionType";
import randomstring from "randomstring";
var data = JSON.parse(localStorage.getItem("tasks"));
var initState = data ? data : [];
var myReducer = (state = initState, action) => {
	switch (action.type) {
		case types.LIST_ALL:
			return [...state];
		case types.SAVE_TASK:
			console.log("ACTIONS TASK", action)
			if (!action.task.task_id) {
				var newTask = {
					id: onGenerateID(),
					name: action.task.task_name,
					status: action.task.task_status,
				};
				state.push(newTask);
				localStorage.setItem("tasks", JSON.stringify(state));
				return [...state];
			} else{
				console.log("MODIFYING")
				var index = state.findIndex(function (task) {
					return task.id === action.task.task_id;
				});
				console.log(`INDEX ${index}`)
				if(index!==-1){
					console.log(state[index])
					var newTask = {
						id : action.task.task_id,
						name: action.task.task_name,
						status: action.task.status
					}
					state[index] ={
						...newTask
					}
					return [...state];
				}
			}
		case types.UPDATE_STATUS:
			index = state.findIndex(function (task) {
				return task.id === action.task_id;
			});
			if (index !== -1) {
				state[index] = {
					...state[index],
					status: !state[index].status,
				};
				localStorage.setItem("tasks", JSON.stringify(state));
				return [...state];
			}
			break;
		case types.DELETE_TASK_ITEM:
			var tasks = state;
			index = tasks.findIndex(function (task) {
				return task.id === data;
			});
			tasks.splice(index, 1);
			localStorage.setItem("tasks", JSON.stringify(tasks));
			return [...state];
		default:
			return state;
	}
};

var onGenerateID = () => {
	return (
		randomstring.generate(4) +
		"-" +
		randomstring.generate(4) +
		"-" +
		randomstring.generate(4) +
		"-" +
		randomstring.generate(4)
	);
};
export default myReducer;
