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
  };

  render() {
    const styles = this.state.clicked
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };
    return (
      <div className="TableRow">
        <div className="TableCell" style={styles} onClick={this.handleClick}>
          {this.props.todo.text}
        </div>
        <div className="TableCell">
          <span>{this.props.todo.completed ? "Yes" : "No"}</span>
        </div>
        <div className="TableCell">
        <input type="submit" onClick={this.handleRemove} value="Remove" id="Button" disabled={!this.props.todo.completed} />
        </div>
      </div>
    );
  }
}

export default Todo;
