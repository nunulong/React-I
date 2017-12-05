import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: this.props.todo.completed });
  };

  handleRemove = () => {
    this.props.remove(this.props.index);
  }

  render() {
    const styles = this.state.clicked
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };
    return (
      <div className="todo__container" style={{padding: "10px"}}>
        <div className="todo" style={styles} onClick={this.handleClick}>
          {this.props.todo.text}
        </div>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}

export default Todo;
