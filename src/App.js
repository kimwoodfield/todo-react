import React, { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoContainer from './components/TodoContainer/TodoContainer';

import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

function App() {
  const [ tasks, setTasks ] = useState([]);

  const handleRemoveTodo = (id) => {
    let newTodos = tasks.slice();
    const foundTodo = newTodos.find(todo => id === todo.id);
    if (!foundTodo) {
      return;
    }
    const updatedTodos = newTodos.filter(todo => id !== todo.id);
    setTasks(updatedTodos);
  }

  const handleCompletedTodo = (id) => {
    let currentTodos = tasks.slice();
    const foundTodo = currentTodos.find(todo => id === todo.id);
    if (!foundTodo) {
      return;
    }
    foundTodo.isComplete = !foundTodo.isComplete;

    setTasks(currentTodos);

    let sorted;
    setTimeout(() => {
      sorted = sortTodos(currentTodos);
      setTasks(sorted);
    }, 750);
  }

  const handleRenameTodo = (todo, id) => {
    let newTodos = tasks.slice();
    const foundTodo = newTodos.find(todo => id === todo.id);
    if (!foundTodo) {
      return;
    }

    foundTodo.title = todo;

    setTasks(newTodos);
  }

  const todoChanged = (todo) => {
    setTasks(previousState => {
      return [ todo, ...previousState ];
    });
  }

  const sortTodos = (todos) => {
    let currentTodos = todos.slice();
    const sorted = currentTodos.sort((a, b) => {
      if (a.isComplete) return 1;
      else return -1;
    });
    return sorted;
  }

  return (
    <div className="App">
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Typography 
          variant="h1" 
          component="div" 
          gutterBottom 
          sx={{
            textAlign: 'center',
            fontSize: 36,
            fontWeight: 500,
            padding: 2,
          }}
        >
          todo-react.
        </Typography>
        <TodoForm onTodoChange={todoChanged} sx={{width: '100%'}} />
        <TodoContainer 
          items={tasks} 
          onDelete={handleRemoveTodo} 
          onRename={handleRenameTodo} 
          onComplete={handleCompletedTodo}
        />
      </Box>
    </div>
  );
}

export default App;
