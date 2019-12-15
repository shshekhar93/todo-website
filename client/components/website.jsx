import React from 'react';
import {useState, useEffect} from 'react';
import Header from './header';
import ToDo from './todo';
import '../css/website.css';

function mapTodosToComponent(todoObj) {
  return <ToDo text={todoObj.text} />;
}

// sample map function 

// function map ( array, mapper) {
//   const newArr = [];
//   for (i = 0 ; i < array.length; i++) {
//     newArr[i] = mapper(array[i])
//   }
//   newArr;
// }

function ToDoWebsite (props) {
  const [todos, updateTodos] = useState([]);

  useEffect(async () => {
    const res = await fetch('/todo', {
      method: 'GET',
      credentials: 'same-origin'
    });
    const responseObj = await res.json();
    updateTodos(responseObj.todos);
  }, []);

  return (
    <div>
      <Header />
      <div className="container todo-website">
        <div className="row new-todo-container">
          <div className="col-9">
            <input className="form-control" placeholder="Enter a todo to save" />
          </div>
          <div className="col-3">
            <button className="btn btn-primary">Save ToDo</button>
          </div>
        </div>
        <div className="row">
          {
            todos.map(mapTodosToComponent)
          }
        </div>
      </div>
    </div>
  );
};

export default ToDoWebsite;