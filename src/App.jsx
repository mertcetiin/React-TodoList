import './App.css'
import Input from './components/Input'
import List from './components/List'
import { useState } from 'react'

function App() {

  return (
    <div className='App'>
      <h1>TodoList</h1>
      <Input />
      <List />
    </div>
  )
}

export default App
