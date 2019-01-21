import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import VisibilityFilterPane from './components/VisibilityFilters';
import "./styles.css";

const TodoApp = () => {
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
            <VisibilityFilterPane />
        </div>
    );
}

export default TodoApp;