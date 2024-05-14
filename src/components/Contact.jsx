import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../style/Contact.css';

function Contact () {
    // State variables for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [messageSent, setMessageSent] = useState(false);

// Handle name input chages
    const handleNameChange = (event) => {
        setName(event.target.value);
        setNameError(false);
    };

    // Handle email input changes
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError(false);
    };

    // Handle message input changes
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
        setMessageError(false);
    };

    // Validate email format
    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
      };  

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;

        // Validate name
        if (name.length <= 5) {
            setNameError(true);
            valid = false;
        }

        // Validate email
        if (!validateEmail(email)) {
            setEmailError(true);
            valid = false;
        }

        // Validate message
        if (message.length <= 25) {
            setMessageError(true);
            valid = false;
        }

        // If form is valid, send message
        if (valid) {
            console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
            setName('');
            setEmail('');
            setMessage('');
            setMessageSent(true);
        }
    };

    // Render contact form
    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col lg={8} className='mx-auto'>
                        <h2 className='contact-header'>Contact Me</h2>
                            <p className='email-direct'>
                                This functionality is being built still; Please email me directly at
                                <a href='mailto:Joshuahale829@gmail.com' style={{marginLeft: '5px'}}>Joshuahale829@gmail.com</a>
                            </p>
                        {messageSent && (
                            <div className='alert alert-success' role='alert'>
                                Message sent successfully!
                            </div>
                        )}
                        <Form onSubmit={handleSubmit} noValidate>
                            <Form.Group>
                                <Form.Label htmlFor='name'>Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    className={nameError ? 'is-invalid' : ''}
                                    id='name'
                                    name='name'
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                />
                                {nameError && (
                                    <div className='invalid-feedback'>
                                        Please enter a valid name.
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor='email'>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    className={emailError ? 'is-invalid' : ''}
                                    id='email'
                                    name='email'
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {emailError && (
                                    <div className='invalid-feedback'>
                                        Please enter a valid email.
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor='message'>Message</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    className={messageError ? 'is-invalid' : ''}
                                    id='message'
                                    name='message'
                                    rows='5'
                                    value={message}
                                    onChange={handleMessageChange}
                                    required
                                />
                                {messageError && (
                                    <div className='invalid-feedback'>
                                        Please enter a message with at least 25 characters.
                                    </div>
                                )}
                            </Form.Group>
                            <Button type='submit' className='send-message-button'>
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

// Export Contact
export default Contact;