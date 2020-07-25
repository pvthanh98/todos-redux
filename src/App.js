import React from "react";
import TaskForm from "./components/TaskForm";
import Search from "./components/Search";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import * as actions from "./actions/index";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task_editing: null,
      filter: {
        name: "",
        status: -1,
      },
      keyword: "",
    };
  }

  onUpdateStatus = (data) => {
    var tasks = this.state.tasks;
    var index = tasks.findIndex(function (task) {
      return task.id === data;
    });

    tasks[index].status = !tasks[index].status;
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };


//   onUpdate = (task_id) => {
//     var { tasks } = this.state;
//     var index = tasks.findIndex((task) => task.id === task_id);
//     var task_editing = tasks[index];
//     this.setState({
//       task_editing,
//     });
//     this.onShowForm();
//   };

  onFilter = (name, status) => {
    this.setState({
      filter: {
        name: name.toLowerCase(),
        status: status,
      },
    });
  };

  onSearch = (name) => {
    this.setState({
      keyword: name,
    });
  };

  onOpenForm =()=>{
    this.props.onOpenForm()
    this.props.editTask()
  }

  render() {
    var { isOpenForm } = this.props;
    var { task_editing } = this.props;
    console.log("taskedit:", task_editing)
    return (
      <div className="App">
        <div style={{ textAlign: "center", color: "blue", padding: "8px" }}>
          <h2>Quản lí Công Việc</h2>
        </div>
        <div className="container mt-3">
          <div className="row">
            {isOpenForm && <TaskForm />}    
            <div className={isOpenForm ? "col-md-8" : "col-md-12"}>
              <button
                onClick={this.onOpenForm}
                className="btn btn-success"
              >
                <b>+ </b>Thêm công việc
              </button>
              <button
                onClick={this.onGenerateData}
                className="btn btn-warning ml-3"
              >
                <b>+ </b> Tạo công việc mẫu
              </button>
              <TaskList
                onFilter={this.onFilter}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => {
    return {
        isOpenForm : state.isOpenForm,
        task_editing: state.editItem
    };
  },
  (dispatch) => {
    return {
      onOpenForm: () => {
        dispatch(actions.OPEN_FORM());
      },
      editTask: () => {
        dispatch(actions.editTask(null));
      },
    };
  }
)(App);
