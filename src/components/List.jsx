import React from 'react';
import '../App.css';

function List({ onTodo, handleDelete }) {
    return (
        <div className='list-items'>
            <ul>
                {onTodo.map((item, id) => (
                    <li className='list-item' key={id}>
                        {item}
                        <button className='delete-btn' onClick={() => handleDelete(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List;