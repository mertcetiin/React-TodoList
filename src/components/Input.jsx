import React from 'react'
import '../App.css';
import { useState } from 'react';


function Input({ onHandleTodoList, onHandleClear }) {

    const [text, setText] = useState('');

    const onText = (e) => {
        setText(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text !== '') {
            const capitalizedTitle = text.charAt(0).toUpperCase() + text.slice(1)
            onHandleTodoList(capitalizedTitle);
            setText('')
        }
    }

    return (
        <div className='header'>
            <form onSubmit={handleSubmit}>
                <input name='name' value={text} onChange={onText} />
                <button className='add-btn' type='submit'>Add</button>
                <button className='clear-btn' onClick={onHandleClear}>Clear</button>
            </form>
        </div>
    )
}

export default Input;