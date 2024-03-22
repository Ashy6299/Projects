import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='#home'>Welcome</Navbar.Brand>
          <Nav className='me-auto'>
            <ul>
              <li>
                <Link to='/'>Login</Link>
              </li>
              <li>
                <Link to='/SignUp'>SignUp</Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
