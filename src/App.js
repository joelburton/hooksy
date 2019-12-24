import React, { useState } from 'react';
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid";

function App() {
  const [list, setList] = useState([
    {id: uuid.v4(), title: "Hello", body: "Hello body"}
  ]);

  function add ({title, body}) {
    setList([...list, {id: uuid.v4(), title, body}]);
  }

  function deleteTodo(id) {
    setList(list.filter(t => t.id !== id));
  }

  return (
    <div className="App">
      <NewTodoForm add={add}/>
      <TodoList todos={list} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
