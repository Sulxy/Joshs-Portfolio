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
                <Navbar.Brand as={Link} to='/Joshs-Portfolio/' className="text-white">Joshua Hale</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/Joshs-Portfolio/home' className="fs-5">Home</Nav.Link>
                        <Nav.Link as={Link} to='/Joshs-Portfolio/about' className="fs-5">About Me</Nav.Link>
                        <Nav.Link as={Link} to='/Joshs-Portfolio/Contact' className="fs-5">Contact</Nav.Link>
                        <Nav.Link as={Link} to='/Joshs-Portfolio/Resume' className="fs-5">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;