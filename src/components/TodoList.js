import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: {},
    };
  }

  handleInput = (event) => {
    this.setState({ newTodo: {text: event.target.value, completed: this.state.newTodo.completed}});
  }

  addTodo = (event) => {
    event.preventDefault();
    const todoList = this.state.todos;
    if (!!this.state.newTodo.text) {
      todoList.push(this.state.newTodo);
    } else {
      alert("Please type in something!");
    }
    this.setState({
      newTodo: {text: "", completed: null},
      todos: todoList
    });
  }

  removeTodo = (index) => {
    const todoList = this.state.todos;
    todoList.splice(index, 1);
    this.setState({
      newTodo: {text: "", completed: null},
      todos: todoList
    });
  }

  handleCheckbox = (event) => {
    this.setState({newTodo: {text: this.state.newTodo.text, completed: event.target.value}});
  }

  render() {
    const styles = { textAlign: "center" };
    return (
      <div style={styles}>
        {this.state.todos.map((todo, i) => <Todo key={i} index={i} remove={this.removeTodo} todo={todo} />)}
        <form>
          <input onChange={this.handleInput} placeholder="New Todo" value={this.state.newTodo.text}/>
          <input onChange={this.handleCheckbox} type="checkbox" id="todo"/>
          <label htmlFor="todo">Completed</label>
          <button onClick={this.addTodo}>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoList;