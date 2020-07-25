import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
class TaskItem extends React.Component {
	onDeleteItem = () => {
		this.props.onDeleteItem(this.props.task.id);
		this.props.onCloseForm();
	};

	onUpdate = ()=>{
		this.props.onOpenForm()
		this.props.onEditItem(this.props.task)
	}
	render() {
		var { index, task } = this.props;
		return (
			<tr>
				<td> {index + 1} </td>
				<td> {task.name}</td>
				<td
					style={{ cursor: "pointer" }}
					onClick={() => this.props.changeStatus(task.id)}
				>
					{task.status ? (
						<span className="badge badge-success">Active</span>
					) : (
						<span className="badge badge-danger">Inactive</span>
					)}
				</td>
				<td>
					<button
						onClick={ this.onUpdate}
						className="btn btn-primary btn-xs"
					>
						<span className="glyphicon glyphicon-pencil">Edit</span>
					</button>
				</td>
				<td>
					<button
						onClick={this.onDeleteItem}
						className="btn btn-danger btn-xs"
					>
						<span className="glyphicon glyphicon-trash">
							Delete
						</span>
					</button>
				</td>
			</tr>
		);
	}
}
export default connect(null, function (dispatch) {
	return {
		changeStatus: (id) => {
			dispatch(actions.updateSatus(id));
		},
		onDeleteItem: (id) => {
			dispatch(actions.deleteItem(id));
		},
		onCloseForm: ()=>{
			dispatch(actions.closeForm());
		},
		onOpenForm: () => {
			dispatch(actions.OPEN_FORM());
		},
		onEditItem: (task_id) =>{
			dispatch(actions.editTask(task_id))
		}
	};
})(TaskItem);
