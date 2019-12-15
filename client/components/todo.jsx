import React from 'react';
import '../css/todo.css'

function ToDo (props) {
  return (
    <div className="col-3">
      <p className="todo-item">{props.text}</p>
    </div>
  );
}

export default ToDo;
