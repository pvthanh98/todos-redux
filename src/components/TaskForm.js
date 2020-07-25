import React from "react";
import Loading from "./loading";
import * as actions from "../actions/index";
import { connect } from "react-redux";
class TaskForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			task_name: "",
			task_status: false,
			loading: false,
		};
	}
	componentWillMount() {
		if (this.props.editItem) {
			this.setState({
				id: this.props.editItem.id,
				task_name: this.props.editItem.name,
				task_status: this.props.editItem.status,
			});
		}
	}

	componentWillReceiveProps(newProps) {
		if (newProps && newProps.editItem) {
			this.setState({
				id: newProps.editItem.id,
				task_name: newProps.editItem.name,
				task_status: newProps.editItem.status,
			});
		} else if (newProps && newProps.editItem === null) {
			this.setState({
				id: "",
				task_name: "",
				task_status: false,
			});
		}
	}

	onCloseForm = () => {
		this.setState({
			task_name: "",
			task_status: false,
			loading: false,
		});
		this.props.closeForm();
		//pass data example   this.props.passData("thanhphan");
	};
	onHandleForm = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	onHandleSubmit = (e) => {
		e.preventDefault();
		if (this.props.editItem) {
			this.props.onSaveTask({
				task_id: this.props.editItem.id,
				task_name: this.state.task_name,
				task_status: this.state.task_status,
			});
		} else {
			this.props.onSaveTask({
				task_name: this.state.task_name,
				task_status: this.state.task_status,
			});
		}

		this.setState({
			id: "",
			task_name: "",
			task_status: false,
			loading: false,
		});
	};
	render() {
		return (
			<div className="col-md-4">
				<h3 style={{ color: "green" }}>
					{!this.props.task ? "Thêm công việc" : "Sửa công việc"}
				</h3>
				<div style={{ textAlign: "right" }}>
					<i
						onClick={this.onCloseForm}
						style={{ cursor: "pointer" }}
						className="fas fa-times-circle"
					></i>
				</div>
				<form onSubmit={this.onHandleSubmit}>
					<div className="form-group">
						<label>Công việc</label>
						<input
							name="task_name"
							onChange={this.onHandleForm}
							value={this.state.task_name}
							type="text"
							className="form-control"
							placeholder="Nhập tên công việc"
						/>
					</div>
					<div className="form-group">
						<label>Trạng thái</label>
						<select
							onChange={this.onHandleForm}
							value={this.state.task_status}
							name="task_status"
							className="custom-select mr-sm-2"
							id="inlineFormCustomSelect"
						>
							<option value={true}>Activated</option>
							<option value={false}>Not Activated</option>
						</select>
					</div>
					<button type="submit" className="btn btn-primary">
						<b> + </b> Lưu
					</button>
					<button
						onClick={this.onCloseForm}
						type="button"
						className="btn btn-danger ml-2"
					>
						<b> x </b> Hủy bỏ
					</button>
					{this.state.loading && <Loading />}
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		editItem: state.editItem,
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onSaveTask: (task) => {
			dispatch(actions.onSaveTask(task));
		},
		closeForm: () => {
			dispatch(actions.closeForm());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
