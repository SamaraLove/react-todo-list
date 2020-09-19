import React, { useState } from "react"
import "./TodoItem.css"

function TodoItem(props) {
  const { todo, index, ToggleTodo, removeTodo, updateTodo } = props
  const [edit, setEditing] = useState(false)

  return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
      <div
        onClick={() => {
          if (!edit) setEditing(true)
        }}
      >
        {edit ? (
          <input
            autoFocus
            defaultValue={todo.text}
            onBlur={(e) => {
              const text = e.target.value
              updateTodo(index, text)
              setEditing(false)
            }}
            type="text"
          />
        ) : (
          todo.text
        )}
      </div>
      <div>
        <button onClick={() => ToggleTodo(index)}>{` ${
          todo.isCompleted ? "uncomplete" : "complete"
        }`}</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  )
}

export default TodoItem
