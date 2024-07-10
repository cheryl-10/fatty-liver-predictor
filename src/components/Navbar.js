import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="transparent" variant="dark" className="bg-grey">
        <Container>
          <Navbar.Brand as={Link} to={"/"} style={{ color: 'black', fontSize: '24px'}}>Fatty Liver Prediction</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
