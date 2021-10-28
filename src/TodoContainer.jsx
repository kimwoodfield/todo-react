import React, { useState } from 'react';
import Todo from './Todo';

function TodoContainer(props) {
    const [ editing, setEditing ] = useState(false);
    console.log(props);

    const removeTodo = (todo) => {
        props.onDelete(todo);
    }

    const editTodo = (todo, id) => {
        props.onRename(todo, id);
    }

    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Current Todos</h3>
            <ul>
                {
                    props.items ? (
                        props.items.map((todo) => {
                            console.log(todo.title);
                            return (
                                <Todo item={todo} onRemoveTodo={removeTodo} onEditTodo={editTodo} />
                                // <li key={todo.id}>
                                //     {todo.title}
                                //     <button>Edit</button>
                                //     <button onClick={() => handleDelete(todo)}>Delete</button>
                                // </li>
                            )
                        })
                    ) : ''
                }
            </ul>
        </div>
    )
}

export default TodoContainer;