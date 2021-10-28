import React, { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoContainer from './components/TodoContainer/TodoContainer';

// TODO:
// CREATE - user can create a todo - DONE
// READ - user can read a todo - DONE
// UPDATE - user can update a todo - DONE
// UPDATE2 - user can mark todo as complete - DONE
// DELETE - user can delete a todo - DONE

function App() {
  const [ tasks, setTasks ] = useState([]);

  const handleRemoveTodo = (id) => {
    //  console.log('inside of app.js, our todo to delete is - ', todo);
    let newTodos = tasks.slice();
    const foundTodo = newTodos.find(todo => id === todo.id);
    if (!foundTodo) {
      return;
    }
    const updatedTodos = newTodos.filter(todo => id !== todo.id);
    setTasks(updatedTodos);
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

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1>todo-react</h1>
        <TodoForm onTodoChange={todoChanged} />
        <TodoContainer items={tasks} onDelete={handleRemoveTodo} onRename={handleRenameTodo} />
      </div>
    </div>
  );
}

export default App;
