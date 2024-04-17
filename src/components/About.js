import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import photo from '../images/photo.jpg';
import '../style/About.css';

function About () {
  return (
    <section id="about" className="py-5">
        <h1 className="about-heading">About Me</h1>
        <Container>
            <Row>
                <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mb-4 mb-md-0">
                    <Image src={photo} rounded fluid className="about-image" />
                </Col>
                <Col xs={12} md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center md-4>">
                               About Joshua Hale
                            </Card.Title>
                            <Card.Text>
                                Hello! I am Joshua Hale, a 29-year-old web developer from the United States. I have been working with Technology since 2014, and recently dove into the world of web development. I enjoy learning new things and am always looking to improve myself and my skillset. I built my first computer right after high school, and have fallen in love with trying to understand how they work ever since. I started a job in 2014 doing custom server configuration, building them, and ensuring customer satisfaction with a properly functioning product. I followed this job with component-level diagnosis and repair for telecom equipment, and then moved onto an inventory position handing tens of thousands of dollars worth of equipment. I have always been interested in technology and how it works, and I am excited to see where my journey in web development takes me.
                            </Card.Text>
                            <Card.Text>
                                I recent pursued a higher education by attending the University of Texas at San Antonio's Full Stack Web Development Bootcamp. I have learned a lot about web development, and have been able to apply my knowledge to real-world projects. I have experience with HTML, CSS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, React, and more. 
                            </Card.Text>
                            <Card.Text>
                                I always strive to be the best that I can be, and to do the best that I can. I don't let stress effect my ability to work, and I am always looking for ways to improve myself. I am a team player, and I am always willing to help out my team members when they need it. I enjoy helping others learn as much as I enjoy leaning myself. 
                            </Card.Text>
                            <Card.Text>
                                I believe that my unique experience with servers, workstations, their inner components, how they work, and networking puts me in a position of elevated understanding that is uniquely my own. My experience with teaching helps me be able to break large tasks up into smaller pieces, and to explain more complex topics in a way that others can easily understand. 
                            </Card.Text>
                            <Card.Text>
                                Every day I strive to learn and grow, applyiing a growth mindset to everything that I do. With my unique background, and a lifelong learner, I am excited to apply myself and bring your organization to new heights. 
                            </Card.Text>
                            <Card.Text>
                                Together, we can build a path to success. I am committed to helping you reach your goals, and I am excited to see where the future takes us. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default About;