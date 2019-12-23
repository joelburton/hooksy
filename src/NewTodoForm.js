import React, { useState } from 'react';

function NewTodoForm({add}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function updateTitle(e) {
    setTitle(e.target.value);
  }

  function updateBody(e) {
    setBody(e.target.value)
  }

  function save(e) {
    e.preventDefault();
    setTitle("");
    setBody("");
    add({title, body});
  }

  return (
    <form onSubmit={save}>
      <input name="title" value={title} onChange={updateTitle}/>
      <input name="body" value={body} onChange={updateBody}/>
      <button>Save</button>
    </form>
  );
}

export default NewTodoForm;
