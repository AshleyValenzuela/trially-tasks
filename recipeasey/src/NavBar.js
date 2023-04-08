import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import InitialQueryModal from './InitialQueryModal'

function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container className='nav-margin'>
        <Link className="no-underlining" to="/">
          <Navbar.Brand className="website-name-on-navbar">
            RecipEasey
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Link className="no-underlining home-link" to='/'>Home</Link>
            <InitialQueryModal variant='success'>Get Started</InitialQueryModal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
