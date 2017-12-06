import React, { Component } from "react";
import Todo from "./Todo.js";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: { text: "", completed: null },
      value: "0",
    };
  }

  handleInput = event => {
    this.setState({ newTodo: { text: event.target.value, completed: this.state.newTodo.completed }, value: this.state.value });
  };

  handleChange = (event) => {
    this.setState({ newTodo: { text: this.state.newTodo.text, completed: event.target.value }, value: event.target.value });
    console.log(event.target.value);
  };

  addTodo = event => {
    event.preventDefault();
    const todoList = this.state.todos;
    if (!!this.state.newTodo.text) {
      todoList.push(this.state.newTodo);
    } else {
      alert("Please type in something!");
    }

    this.setState({
      newTodo: { text: "", completed: null },
      todos: todoList, 
      value: "0",
    });
  };

  removeTodo = event => {
    const todoList = this.state.todos;
    todoList.splice(event, 1);
    this.setState({
      todos: todoList,
    });
  };

  render() {
    return (
      <div className="TableBody">
        {this.state.todos.map((todo, i) => (
          <Todo key={i} index={i} remove={this.removeTodo} todo={todo} />
        ))}
        <div className="TableRow">
          <div className="TableCell">Add Your Todo</div>
          <div className="TableCell"></div>
          <div className="TableCell"></div>
        </div>
        <form onSubmit={this.addTodo} className="TableRow">
          <div className="TableCell">
            <input
              type="text"
              onChange={this.handleInput}
              placeholder="New Todo"
              value={this.state.newTodo.text}
            />
          </div>
          <div className="TableCell">
            <label>
              <select
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="1">Completed</option>
                <option value="0">Not Completed</option>
              </select>
            </label>
          </div>
          <div className="TableCell">
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
    );
  }
}

export default TodoList;
