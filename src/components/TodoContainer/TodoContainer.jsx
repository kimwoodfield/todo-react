import React from 'react';
import Todo from '../Todo/Todo';

import List from '@mui/material/List';


function TodoContainer(props) {

    const completeTodo = (id) => {
        props.onComplete(id);
    }

    const removeTodo = (todo) => {
        props.onDelete(todo);
    }

    const editTodo = (todo, id) => {
        props.onRename(todo, id);
    }

    if (props.items < 1) {
        return null;
    }

    return (
        <div style={{ width: '90%', display: 'flex', justifyContent: 'center', maxWidth: '525px' }}>
            <List sx={{ width: '100%', maxWidth: '525px', padding: 0, margin: 0}}>
                {
                    props.items ? (
                        props.items.map((todo) => {
                                return (
                                    <Todo item={todo} onRemoveTodo={removeTodo} onEditTodo={editTodo} onCompletedTodo={completeTodo} />
                                )
                        })
                    ) : ''
                }
            </List>
        </div>
    )
}

export default TodoContainer;