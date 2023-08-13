import React from 'react';
import '../App.css';

function List({ onTodo, handleDelete }) {
    return (
        <div className='list-items'>
            <ul>
                {onTodo.map((item) => (
                    <li className='list-item' key={item.id}>
                        {item.newTodo}
                        <button className='delete-btn' onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List;