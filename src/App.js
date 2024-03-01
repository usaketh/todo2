import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const LOCAL_STORAGE_KEY = "todos";

  const addTodo = (todoText) => {
    if(!todoText.trim()) return;

    const newTodo = { id: todos.length + 1, text: todoText};
    
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  }
  
  useEffect(() => {
    const retrievedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("Retrieved Todos:", retrievedTodos);

    if(retrievedTodos) setTodos(retrievedTodos);
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    console.log("Todos saved:", todos);
  },[todos]);


  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '300px',
  margin: '5 auto',
  backgroundColor: '#fff',

};

export default App;
