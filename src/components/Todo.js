import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    };
  }

  handleClick = (event) => {
    this.setState({ clicked: !!parseInt(this.props.todo.completed, 10) });
  };

  handleRemove = (event) => {
    this.props.remove(this.props.index);
    this.setState({ clicked: !!parseInt(this.props.todo.completed, 10) });
  };

  render() {
    const styles = this.state.clicked && !!parseInt(this.props.todo.completed, 10)
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };
    return (
      <div className="TableRow">
        <div className="TableCell" style={styles} onClick={this.handleClick}>
          {this.props.todo.text}
        </div>
        <div className="TableCell">
          <span>{!!parseInt(this.props.todo.completed, 10) ? "Yes" : "No"}</span>
        </div>
        <div className="TableCell">
        <input type="submit" onClick={this.handleRemove} value="Remove" disabled={!(!!parseInt(this.props.todo.completed, 10))} />
        </div>
      </div>
    );
  }
}

export default Todo;
