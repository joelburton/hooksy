import React from 'react';

function Todo({id, title, body, deleteTodo}) {
  function clickDel(e) {
    deleteTodo(id);
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <i>{id}</i>
      <button onClick={clickDel}>Delete</button>
    </div>
  );
}

export default Todo;
