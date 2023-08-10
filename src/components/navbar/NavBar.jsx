import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="mb-4"
      expanded={expanded}
      onToggle={handleNavbarToggle}
    >
      <Container>
        <Navbar.Brand href="#home" className="logo">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="mr-auto nav-links">
            <Nav.Link href="#jobs" onClick={handleLinkClick}>
              Find Jobs
            </Nav.Link>
            <Nav.Link href="#talent" onClick={handleLinkClick}>
              Find Talent
            </Nav.Link>
            <Nav.Link href="#for-talent" onClick={handleLinkClick}>
              For Talent
            </Nav.Link>
            <Nav.Link href="#solutions" onClick={handleLinkClick}>
              Casting/Hiring Solutions
            </Nav.Link>
            <Nav.Link href="#magazine" onClick={handleLinkClick}>
              Magazine
            </Nav.Link>
          </Nav>
          <Nav className="sign-in-btn">
            <Link to="/login">
              <Button className="btn btn-primary" onClick={handleLinkClick}>
                Sign In
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
