// NavBar.jsx

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="mr-auto">
            <Nav.Link href="#jobs">Find Jobs</Nav.Link>
            <Nav.Link href="#talent">Find Talent</Nav.Link>
            <Nav.Link href="#for-talent">For Talent</Nav.Link>
            <Nav.Link href="#solutions">Casting/Hiring Solutions</Nav.Link>
            <Nav.Link href="#magazine">Magazine</Nav.Link>
          </Nav>
          <Nav>
            <Button className="sign-in-btn">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
