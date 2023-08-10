import React from 'react'

function List({ onTodo }) {
    return (
        <div>
            <ul>
                {onTodo.map((item, id) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default List;