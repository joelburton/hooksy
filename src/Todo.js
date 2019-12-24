import React from 'react';

const Todo = React.memo(({id, title, body, deleteTodo}) => {
  function clickDel(e) {
    deleteTodo(id);
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={clickDel}>Delete</button>
    </div>
  );
});

export default Todo;
