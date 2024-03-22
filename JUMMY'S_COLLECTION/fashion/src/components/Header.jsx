import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../components/Header.css";

function Header() {
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='/'>JC</Navbar.Brand>
          <Nav className='me-auto'>
            <Link className='link' to='/'>
              {" "}
              Home{" "}
            </Link>
            <Link className='link' to='/Shopping'>
              Shopping
            </Link>
            <Link className='link' to='/About'>
              About
            </Link>
            <Link className='link' to='/Contacts'>
              Contacts
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
