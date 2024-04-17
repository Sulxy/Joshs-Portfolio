import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/Header.css';

// Header
function Header() {
    return (
    <>
        <Container fluid className="bg-dark">
            <Row className="justify-content-center text-center mb-0">
                <Col className="pb-0">
                    <h1 className='text-white' style={{ fontSize: '70px' }}>
                        <FontAwesomeIcon icon={faCode} className="fa-knight" size="xl" style={{ color: "#white" }}/>
                        <Link to="/Joshs-Portfolio/" className="text-white text-decoration-none" style={{ margin: '0' }}>Joshua Hale</Link>
                        <FontAwesomeIcon icon={faCode} className="fa-knight" size="xl" style={{ color: "#white" }}/>
                    </h1>
                </Col>
            </Row>
        </Container>
        <Navigation />
    </>
    );
}

export default Header;