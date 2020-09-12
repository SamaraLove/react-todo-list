import React from "react";
import TodoItem from "./components/TodoItem";

function App(){
  return (
    <div>
      <h1>My todo list</h1>;
      <TodoItem todo="Finish project."/>;
      <TodoItem todo="Second task."/>;
    </div>
  );
}

export default App;