import React from "react";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => (
  <div>
    <div className="Title">Ting's Todo List</div>
    <div className="App Table blueTable">
      <div className="TableHeading">
        <div className="TableRow">
          <div className="TableHead">Things To Do</div>
          <div className="TableHead">Completed</div>
          <div className="TableHead">Remove</div>
        </div>
      </div>
      <TodoList />
    </div>
  </div>
);

export default App;
