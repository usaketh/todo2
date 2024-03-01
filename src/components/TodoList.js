import React from 'react'

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul>
        {todos.map((todo) => (
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <li key={todo.id}>
                {todo.text}
            </li>
            
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </div>
            
        ))}
    </ul>
  )
}



export default TodoList