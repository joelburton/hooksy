import React from 'react';

function Todo({id, title, body, deleteTask}) {
  function clickDel(e) {
    deleteTask(id);
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={clickDel}>Delete</button>
    </div>
  );
}

export default Todo;
