import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
class TaskList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       filterName : '',
       filterStatus:  -1 //tat ca, 0 la disactive, 1 la active
    }
  }

  onHandleForm = (e)=>{
      this.props.onFilter(
        e.target.name==="filterName" ? e.target.value: this.state.filterName,
        e.target.name==="filterStatus" ? e.target.value: this.state.filterStatus
      )
      this.setState({
        [e.target.name]: e.target.value 
      })
  }

  render(){
    var {tasks} = this.props;
    var {filterName, filterStatus}  = this.state;
    tasks = tasks.filter(function(taskItem){
      return taskItem.name.toLowerCase().indexOf(filterName.toLowerCase()) !==-1
    })
    if(filterStatus){
      tasks = tasks.filter((task)=> {
          if(parseInt(filterStatus) === -1) return task;
          else if(parseInt(filterStatus) ===1) return task.status === true; 
          else return task.status === false;
      })
    }


    tasks = tasks.map((task, index)=>{
      return <TaskItem 
                key={task.id} 
                index={index} 
                task={task} 
            />
    })
    return (
        <table className="table table-bordred table-striped mt-3">
              <thead>
                <tr> 
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
            
            <tbody>
            <tr>
                <td></td>
                <td><input  onChange={this.onHandleForm} name="filterName" value={this.state.filterName} type="text" placeholder="Tên công việc" className="form-control"  /></td>
                <td>
                <select onChange={this.onHandleForm} name = "filterStatus" value={this.state.filterStatus} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option value={-1}>All</option>
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                </select>
                </td>
                <td></td>
                <td></td>
            </tr>
            { tasks }
            </tbody> 
        </table>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    tasks : state.tasks
  }
}
export default connect(mapStateToProps, null)(TaskList);
