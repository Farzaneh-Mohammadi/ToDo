import React, { Component } from "react";
import '../styles/NewToDoForm.css'
const { v4: uuidv4 } = require('uuid');


export default class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
      e.preventDefault();
      this.props.createToDo({...this.state, id:uuidv4()});
      this.setState({
          task:""
      });
  }

  handleChange(e) {
      this.setState ({
          [e.target.name]: e.target.value
      })
  }

  render() {
    return (
        <form className="NewToDoForm" onSubmit={this.handleSubmit}>
          <label htmlFor="task">Enter New ToDo: </label>
          <input
            type="text"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add </button>
        </form>
    );
  }
}
