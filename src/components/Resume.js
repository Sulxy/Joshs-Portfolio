import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/Resume.css';
import PDF from '../documentation/Joshua-Hale-Resume.pdf';

// Resume
function Resume () {
    return (
        <section id='resume' className='resume-margin'>
            <Container className='resume-section'>
                <Row>
                    <Col className='text-center'>
                        <h1>Resume</h1>
                        <hr className='star-primary' />
                        <Button variant='dark' href={PDF} download>
                            Download Resume
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <hr className='star-secondary' />
                    <h3>Career Summary</h3>
                        <div className='resume-item'>
                            <ul>
                                <p>
                                    Uniquely qualified with an elevated understanding of Computers and their parts. Between my time working in inventory, building computers for work and for leisure, and seeking diagnostic solutions for failed electrical components, and my experience working in full stack development during the Coding Bootcamp with UTSA, I strongly believe that I would be a solid addition to any team. 
                                </p>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className='star-secondary' />
                        <h3>Top 3 Projects</h3>
                            <div className='resume-item'>
                            <h4><a href='https://github.com/Sulxy/Joshs-Social-Network-API' target='_blank'>Social Network API</a></h4>
                                <ul>
                                    <li><strong>Technology:</strong> Github | JavaScript | Express | Mongoose | MongoDB | Insomnia </li>
                                    <li>Demonstrated functionality on YouTube -- video attached in the Github README.</li>
                                    <li>API that allows users to interact with eachother and make their own posts.</li>
                                </ul>
                            </div>
                            <div className='resume-item'>
                            <h4><a href='https://github.com/Sulxy/Joshs-Backend-for-E-Commerce' target='_blank'>Backend for E-Commerce</a></h4>
                                <ul>
                                    <li><strong>Technology:</strong> Github | Javascript | Express | MySQL | Sequelize | Insomnia </li>
                                    <li>Demonstrated functionality on YouTube -- video attached in the Github README.</li>
                                    <li>Backend for an e-commerce website that allows users to interact with the database.</li>
                                </ul>
                            </div>
                            <div className='resume-item'>
                            <h4><a href='https://github.com/Sulxy/Joshs-SQL-Employee-Tracker' target='_blank'>SQL Employee Tracker</a></h4>
                                <ul>
                                    <li><strong>Technology:</strong> Github | Javascript | Inquirer | MySQL </li>
                                    <li>Demonstrated functionality on YouTube -- video attached in the Github README.</li>
                                    <li>User-Friendly CLI for managing employees.</li>
                                </ul>
                            </div>
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className='star-secondary' />
                        <h3>Full Stack Development</h3>
                        <ul className='list-inline'>
                            <li className='list-inline-item'><strong>Languages:</strong>HTML, CSS, JS</li>
                            <li className='list-inline-item'><strong>Libraries and Frameworks:</strong>Bootstrap, jQuery, React, Express, Node.js, Express.js, Handlebars, Sequelize.js</li>
                            <li className='list-inline-item'><strong>Databases:</strong>MySQL, MongoDB, NoSQL</li>
                            <li className='list-inline-item'><strong>Tools:</strong>Git, GitHub, Heroku, Insomnia, Heroku, Render, Microsoft Office Suite, MongoDB Compass, NPM</li>
                            <li className='list-inline-item'><strong>Methodologies:</strong>Agile, Scrum, Kanban</li>
                            <li className='list-inline-item'><strong>Testing:</strong>Jest, Insomnia</li>
                            <li className='list-inline-item'><strong>Deployment:</strong>Heroku, GitHub Pages, Render</li>
                            <li className='list-inline-item'><strong>Operating Systems:</strong> Windows, Android, iOS, Ubuntu</li>
                            <li className='list-inline-item'><strong>Skills:</strong>Basic Soldering, Hardware Knowledge, Hardware Troubleshooting, Inventory Management, Time Management, Organization, Attention to Detail</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className='star-secondary' />
                        <h3>Education</h3>
                        <div className='resume-item'>
                            <h4>Full Stack Development Coding Bootcamp</h4>
                            <ul>
                                <li>University of Texas at San Antonio</li>
                                <li>2023-2024</li>
                            </ul>
                        </div>
                        <div className='resume-item'>
                            <h4>Allen High School</h4>
                            <ul>
                                <li>High School Diploma</li>
                                <li>2012</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Resume;