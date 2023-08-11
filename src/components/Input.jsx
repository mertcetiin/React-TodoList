import React from 'react'
import { useState } from 'react';

function Input({ onHandleTodoList, onFilter }) {

    const [text, setText] = useState('');

    const onText = (e) => {
        setText(e.target.value)
        onFilter(e)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text !== '') {
            onHandleTodoList(text);
            setText('')
        }
    }


    return (
        <div className='header'>
            <form onSubmit={handleSubmit}>
                <input name='name' value={text} onChange={onText} />
                <button className='add-btn' type='submit'>Add</button>
                <button className='clear-btn'>Clear</button>
            </form>
        </div>
    )
}

export default Input;