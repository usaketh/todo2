import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText('');
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
           type="text"
           value={todoText}
           onChange={(e) => setTodoText(e.target.value)}
           placeholder='Enter todo'
        />
        <button type='submit'>Add todo</button>

    </form>
  )
}



export default TodoForm