import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    alert("hello");
    this.setState({ clicked: !this.state.clicked });
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
          {this.props.todo}
        </div>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}

export default Todo;
