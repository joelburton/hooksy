import React, { useState } from 'react';

function NewTodoForm({add}) {
  const [data, setData] = useState({title: "", body: ""});

  function update(e) {
    setData({...data, [e.target.name]: e.target.value});
  }

  function save(e) {
    e.preventDefault();
    setData({title: "", body: ""});
    add(data);
  }

  return (
    <form onSubmit={save}>
      <input name="title" value={data.title} onChange={update}/>
      <input name="body" value={data.body} onChange={update}/>
      <button>Save</button>
    </form>
  );
}

export default NewTodoForm;
