import React from 'react';
import TodoList from './components/TodoList';
import "./App.css";

const App = () => (
  <div>
    <h2 className="app-title">Ting's Todo App</h2>
    <TodoList />
  </div>
);

export default App;
