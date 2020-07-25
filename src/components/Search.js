import React from 'react';
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            keyword: ''
        }
    }
    onHandleForm = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onHandleSubmit = (e) =>{
        e.preventDefault();
        this.props.onSearch(this.state.keyword);
    }
    render(){
        return(
        <div className="mt-3 d-flex">
            <input name="keyword"  onChange={this.onHandleForm} value={this.state.keyword} style={{width:"60%"}} type="text" placeholder="Tên công việc" className="form-control"  />
            <button className="btn btn-primary ml-2" onClick={this.onHandleSubmit}>Tìm kiếm</button>
            <button className="btn btn-danger ml-2">Sắp xếp</button>
        </div>
        );
    }
}

export default Search;