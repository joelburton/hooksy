import React from 'react';
import Todo from "./Todo";

function TodoList({ todos, deleteTodo }) {

  return (
    <div>
      {
        todos.map(t => <Todo key={t.id}
                             id={t.id}
                             title={t.title}
                             body={t.body}
                             deleteTodo={deleteTodo} />)
      }
    </div>
  );
}

export default TodoList;
