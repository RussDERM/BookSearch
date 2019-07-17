import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {'_____MEMORY_____HOLE__'}
      </Navbar.Brand>
    </Navbar>);
}

export default NavBar;
