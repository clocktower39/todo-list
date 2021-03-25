import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
    let todos = useSelector(state => state);
    return (
        <div>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    )
}

export default TodoList