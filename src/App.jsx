import './App.css'
import Input from './components/Input';
import List from './components/List';
import { useState } from 'react';


function App() {

  const [todo, setTodo] = useState([]);

  const onTodoList = (newTodo) => {
    setTodo([...todo, newTodo])
  }


  return (
    <div className='App'>
      <h1>TodoList</h1>
      <Input onHandleTodoList={onTodoList} />
      <List onTodo={todo} />
    </div>
  )
}

export default App;