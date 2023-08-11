import './App.css'
import Input from './components/Input';
import List from './components/List';
import { useState } from 'react';


function App() {

  const [todo, setTodo] = useState([]);

  const onTodoList = (newTodo) => {
    setTodo([...todo, newTodo])
  };

  const onHandleDelete = (index) => {
    const newTodoDelete = todo.filter((newTodo, id) => id !== index)
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