import React from 'react';

const TodoList = ({ todos, handleComplete }) => {

    return (
        <ul>
            {todos.map(todo =>(
                <li key={todo.id}>
                    <span style={{ textDecoration: todo.complete ? "line-through" : "none" }}></span>
                        {todo.text}
                    <span/>
                    {!todo.complete && (
                        <button onClick={() => handleComplete(todo.id)}>
                            Complete
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;