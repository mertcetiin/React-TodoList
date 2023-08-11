import './App.css'
import Input from './components/Input';
import List from './components/List';
import { useState } from 'react';


function App() {

  const [todo, setTodo] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState(todo);

  const onTodoList = (newTodo) => {
    setTodo([...todo, newTodo])
    setFilteredTodo([...todo, firstUpperCase(newTodo)]);
  };

  const onHandleDelete = (index) => {
    const newTodoDelete = todo.filter((newTodo, id) => id !== index)
    setTodo(newTodoDelete)

  };

  const firstUpperCase = (letter) => {
    return letter.charAt(0).toUpperCase() + letter.slice(1)
  }

  const onFilter = (e) => {
    const filtered = todo.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredTodo(filtered)
  };

  return (
    <div className='App'>
      <h1>TodoList</h1>
      <Input onHandleTodoList={onTodoList} onFilter={onFilter} />
      <List onTodo={filteredTodo} handleDelete={onHandleDelete} />
    </div>
  )
}

export default App;