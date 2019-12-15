import React from 'react';
import {useState, useEffect} from 'react';
import Header from './header';
import ToDo from './todo';
import '../css/website.css';

function mapTodosToComponent(todoObj) {
  return <ToDo key={todoObj._id} text={todoObj.text} />;
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
  const [todoText, updateTodoText] = useState('');

  useEffect(() => {
    (async () => {
      const res = await fetch('/todo', {
        method: 'GET',
        credentials: 'same-origin'
      });
      const responseObj = await res.json();
      updateTodos(responseObj.todos);
    })();
  }, []);

  const saveTodo = async e => {
    if(todoText === '') {
      return;
    }

    const res = await fetch('/todo', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({
        todoText
      })
    });
    const resBody = await res.json();
    // updateTodos(resBody.todos);

    if(resBody.success === false) {
      console.log('Operation failed!');
      return;
    }

    updateTodoText('');

    const getRes = await fetch('/todo', {
      method: 'GET',
      credentials: 'same-origin'
    });
    const responseObj = await getRes.json();
    updateTodos(responseObj.todos);
  };

  return (
    <div>
      <Header />
      <div className="container todo-website">
        <div className="row new-todo-container">
          <div className="col-9">
            <input 
              className="form-control" 
              placeholder="Enter a todo to save" 
              value={todoText}
              onChange={e => updateTodoText(e.target.value)} />
          </div>
          <div className="col-3">
            <button className="btn btn-primary" onClick={saveTodo}>Save ToDo</button>
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