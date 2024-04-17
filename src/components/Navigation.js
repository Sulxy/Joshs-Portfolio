import React from 'react';
import '../style/Navigation.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Navigation
const Navigation = () => {
    return (
        //Bootstrap
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-0.5 mt-0">
            <Container> 
                <Navbar.Brand as={Link} to='/About'></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/About' className="fs-5 nav-link-highlight shadow-lg">About Me</Nav.Link>
                        <Nav.Link as={Link} to='/Portfolio' className="fs-5 nav-link-highlight shadow-lg">Portfolio</Nav.Link>
                        <Nav.Link as={Link} to='/contact' className="fs-5 nav-link-highlight shadow-lg">Contact</Nav.Link>
                        <Nav.Link as={Link} to='/resume' className="fs-5 nav-link-highlight shadow-lg">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;