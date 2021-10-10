import React from 'react';

import "./TodoList.css";

interface TodoListPrpps {
  items: {id: string, text: string}[];
  onDeleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListPrpps> = (props) => {

  return (
    <>
      <ul>
        {props.items.map( (todo) => 
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>削除</button>
          </li>
        )}
      </ul>
    </>
  )
};