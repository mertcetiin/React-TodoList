import './App.css'
import Input from './components/Input';
import List from './components/List';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [todo, setTodo] = useState([]);

  const onTodoList = async (newTodo) => {
    const response = await axios.post('http://localhost:3000/todo', {
      newTodo
    });
    setTodo(prevTodo => [...prevTodo, response.data]);
  };

  const fetchTodo = async () => {
    const response = await axios.get('http://localhost:3000/todo')
    console.log(response)
    setTodo(response.data)
  }

  useEffect(() => {
    fetchTodo();
  }, [])

  const onHandleDelete = async (index) => {
    await axios.delete(`http://localhost:3000/todo/${index}`)
    const newTodoDelete = todo.filter((newTodo) => newTodo.id !== index)
    setTodo(newTodoDelete)
  };

  return (
    <div className='App'>
      <h1>TodoList</h1>
      <Input onHandleTodoList={onTodoList} />
      <List onTodo={todo} handleDelete={onHandleDelete} />
    </div>
  )
}

export default App;