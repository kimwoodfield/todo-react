import React, { useState } from 'react';

function TodoForm(props) {
    const [ todo, setTodo ] = useState('');

    const handleTodoChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!todo) {
            return;
        }

        let newTodo = {
            id: Math.floor(Math.random() * 1000000),
            title: todo,
        }

        props.onTodoChange(newTodo);
        setTodo('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={handleTodoChange} />
            <button type="submit">Add</button>
        </form>
    )
};

export default TodoForm;