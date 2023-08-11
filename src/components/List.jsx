import React from 'react';
import '../App.css';

function List({ onTodo, handleDelete }) {
    return (
        <div className='list-items'>
            <ul>
                {onTodo.map((item, id) => (
                    <div key={id}>
                        <li>{item}</li>
                        <button className='delete-btn' onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default List;