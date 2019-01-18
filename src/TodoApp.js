import React from 'react';
import TodoList from './components/Todo';
import AddTodo from './components/AddTodo';
import VisibilityFilters from './components/VisibilityFilters';
import "./styles.css";

export default TodoApp = () => {
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
    );
}