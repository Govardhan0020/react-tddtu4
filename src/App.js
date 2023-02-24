import React from "react";
import "./style.css";
import TodoList from './TodoList'

export default function App() {
  return (
    <div className ="App">
      <h4 style={{textAlign:"center"}}> ToDo List  </h4>

      <TodoList />
    </div>
  );
}
