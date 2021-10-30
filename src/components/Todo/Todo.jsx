import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { OutlinedInput } from '@mui/material';
import { InputAdornment } from '@mui/material';

function Todo(props) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ renamedTodo, setRenamedTodo ] = useState('');
    const [ todoComplete, setTodoComplete ] = useState(false);

    const toggleCompletedTodo = () => {
        setTodoComplete(!todoComplete);
        props.onCompletedTodo(props.item.id);
    }

    const showEditInput = () => {
        setIsEditing(true);
    }

    const updateTodo = (e) => {
        setRenamedTodo(e.target.value);
    }

    const saveTodo = () => {
        if (!renamedTodo) {
            return;
        }
        props.onEditTodo(renamedTodo, props.item.id);
        setIsEditing(false);
        setRenamedTodo('');
    }

    const removeTodo = () => {
        props.onRemoveTodo(props.item.id);
    }

    return (
        <>
                {
                    isEditing ? (
                        <ListItem>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                value={renamedTodo}
                                onChange={updateTodo}
                                placeholder={props.item.title}
                                sx={{ width:'100%' }}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={saveTodo}
                                    edge="end"
                                    >
                                        <CheckCircleIcon />
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </ListItem>
                    ) 
                    : 
                    (
                        <ListItem sx={{
                            backgroundColor: `${props.item.isComplete ? '#C8E6C9' : '#f0f0f0'}`,
                            fontStyle: `${props.item.isComplete ? 'italic' : 'normal'}`,
                            textDecoration: `${props.item.isComplete ? 'line-through' : 'none'}`,
                            margin: '0 0 10px 0', 
                            borderRadius: 2,
                            height: '50px',
                            maxWidth: '525px'
                        }}>
                            <ListItemText> 
                                <span onClick={showEditInput}>{props.item.title}</span>
                            </ListItemText>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                {
                                    props.item.isComplete ? <CheckBoxIcon onClick={toggleCompletedTodo} /> : <CheckBoxOutlineBlankIcon onClick={toggleCompletedTodo} />
                                }   
                            </ListItemIcon>
                            <IconButton aria-label="add" size="large" onClick={removeTodo} sx={{padding: '0 0 0 7px'}}><DeleteIcon fontSize="inherit" /></IconButton>
                        </ListItem>
                    )
                }

        </>
    )
}

export default Todo;