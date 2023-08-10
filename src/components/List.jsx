import React from 'react'

function List({ onTodo, handleDelete }) {
    return (
        <div>
            <ul>
                {onTodo.map((item, id) => (
                    <div key={id}>
                        <li>{item}</li>
                        <button onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default List;