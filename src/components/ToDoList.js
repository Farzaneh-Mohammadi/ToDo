import React, { Component } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import "../styles/ToDoList.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
		this.toggleCompletion = this.toggleCompletion.bind(this);


  }

  create(newToDo) {
      this.setState ({
        todos: [...this.state.todos, newToDo]
      })
  }

  remove(id){
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    })
  }

  update(id, updatedTask) 
  {
    const updatedToDos = this.state.todos.map (todo => {
      if (todo.id === id)
      {
        return {...todo, task: updatedTask};
      }
      return todo;
    });

    this.setState ({ todos: updatedToDos })
  }


	toggleCompletion(id){
		const updatedToDos = this.state.todos.map (todo => {
      if (todo.id === id)
      {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });

    this.setState ({ todos: updatedToDos })
	}



  render() {
    const todos = this.state.todos.map((todo) => {
      return <ToDo key={todo.id} 
                   id={todo.id} 
                   task={todo.task} 
                   removeToDo={this.remove}
                   updatedToDos={this.update} 
									 completed={todo.completed}
									 toggleTodo={this.toggleCompletion}
									 />;
    });

    return (
      <div className="ToDoList">
        <h1>ToDo List</h1>

        <NewToDoForm createToDo={this.create}/>

        <ul> {todos} </ul>
      </div>
    );
  }
}

export default ToDoList;
