import React, { useState } from 'react';

function Todo(props) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ renamedTodo, setRenamedTodo ] = useState('');
    const [ todoComplete, setTodoComplete ] = useState(false);

    const toggleCompletedTodo = () => {
        setTodoComplete(!todoComplete);
    }

    const showEditInput = () => {
        setIsEditing(true);
    }

    const updateTodo = (e) => {
        setRenamedTodo(e.target.value);
    }

    const saveTodo = () => {
        props.onEditTodo(renamedTodo, props.item.id);
        setIsEditing(false);
        setRenamedTodo('');
    }

    const removeTodo = () => {
        props.onRemoveTodo(props.item.id);
    }

    return (
        <li key={props.item.id}>
            {
                isEditing ? <><input type="text" value={renamedTodo} onChange={updateTodo} placeholder={props.item.title} /><button onClick={saveTodo}>Save</button></> : (
                    <> 
                        { todoComplete ? <div style={{ textDecoration: 'line-through', fontStyle: 'italic' }} onClick={toggleCompletedTodo}>{props.item.title}</div> : <div onClick={toggleCompletedTodo}>{props.item.title}</div> }
                        <button onClick={showEditInput}>Edit</button>
                        <button onClick={removeTodo}>Delete</button>
                    </>
                )
            }
        </li>
    )
}

export default Todo;