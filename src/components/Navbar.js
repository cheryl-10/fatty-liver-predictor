import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import your CSS file

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)' }} variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            Fatty Liver Prediction
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/info" className="nav-link">
                Reference
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
