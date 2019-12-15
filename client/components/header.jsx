import React from 'react';

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">ToDo List</a>
        <div style={{float: 'right'}}>
          <a className="btn btn-primary" href="/logout">Logout</a>
        </div>
      </div>
    </nav>
  );
}
export default Header;
