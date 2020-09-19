import React, { useState } from "react"
import TodoItem from "./components/TodoItem/TodoItem"
import TodoForm from "./components/TodoForm/TodoForm"
import "./App.css"

function App() {
  //variables
  const [todos, setTodos] = useState([
    { text: "Finish plus project", isCompleted: false },
    { text: "more tasks", isCompleted: false },
    { text: "even more tasks", isCompleted: false },
  ])

  //methods
  const addTodo = (text) => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  // function addTodo(text) {

  // }

  const ToggleTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const updateTodo = (index, text) => {
    const newTodos = [...todos]
    newTodos[index].text = text
    setTodos(newTodos)
  }

  // const incompleteTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCompleted = false;
  //   setTodos(newTodos);
  // }

  // Update existing todo item
  // function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
  //   // Prepare new todos state
  //   const newTodosState: TodoInterface[] = [...todos]

  //   // Find correct todo item to update
  //   newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value

  //   // Update todos state
  //   setTodos(newTodosState)
  // }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  //template
  return (
    <div className="app">
      <div className="todo-list">
        <h1>My todo list</h1>
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            index={index}
            ToggleTodo={ToggleTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App

// https://upmostly.com/tutorials/build-a-todo-app-in-react-using-hooks
