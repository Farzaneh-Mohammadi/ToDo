import React, { Component } from "react";
import "../styles/ToDo.css";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isEditing: false,
      task: this.props.task,
			completed: false
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this); 
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
		this.handleToggle = this.handleToggle.bind(this);


  }

  handleRemove() {
    this.props.removeToDo(this.props.id);
  }

  toggleForm(){
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  handleUpdate(e){
     e.preventDefault();

     //take new task
     this.props.updatedToDos(this.props.id, this.state.task);
     this.setState ({ isEditing: false });
  }

  handleChange(e){
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

	handleToggle(e){
		this.props.toggleTodo(this.props.id)
	}

  render() {
    let resault;
    if (this.state.isEditing){
      resault=(
        <div className="ToDo">
          <form className="todo-edit-form" onSubmit={this.handleUpdate}>
            <input type="text"
                   value={this.state.task} 
                   name="task" 
                   onChange={this.handleChange}/>
            <button>Save</button>
          </form>
        </div>
      )
    }
    else{
      resault=(
        <div className="ToDo">
            <li className={this.props.completed ? "completed" : ""}  onClick={this.handleToggle}>{this.props.task}</li>
        <div className="todo-buttons">
          <button onClick={this.toggleForm}>
            <i className="fas fa-pen bi1" />
          </button>
          <button onClick={this.handleRemove}>
          <i className="fas fa-trash bi2" />
          </button>
        
        </div>
      </div>
      )
    }
    return resault;
  }
}
