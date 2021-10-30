import React, { useState } from 'react';

import { InputBase } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Paper } from '@mui/material';

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
            date: Date.now(),
            isComplete: false,
        }

        props.onTodoChange(newTodo);
        setTodo('');
    }

    return (
        <form onSubmit={handleSubmit} style={{width: '90%', maxWidth: '525px'}}>
                <Paper
                sx={{ p: '8px 4px', display: 'flex', alignItems: 'center', width: '100%', marginBottom: '20px' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        type="text" 
                        value={todo} 
                        onChange={handleTodoChange} 
                        inputProps={{ 'aria-label': 'add todos' }}
                        placeholder="What's on today?"
                    />
                    <IconButton type="submit" aria-label="search">
                        <AddBoxIcon fontSize="inherit" />
                    </IconButton>
                </Paper>
            {/* <OutlinedInput
                type="text" 
                value={todo} 
                onChange={handleTodoChange} 
                sx={{ width:'100%' }}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    color="primary" aria-label="add" size="large" type='submit'
                    edge="end"
                    >
                        <AddBoxIcon fontSize="inherit" />
                    </IconButton>
                </InputAdornment>
                }
                // label="Password"
            /> */}
            {/* <Input 
                type="text" 
                value={todo} 
                onChange={handleTodoChange} 
            />
            <IconButton color="primary" aria-label="add" size="large" type='submit'>
                <AddBoxIcon fontSize="inherit" />
            </IconButton> */}
        </form>
    )
};

export default TodoForm;