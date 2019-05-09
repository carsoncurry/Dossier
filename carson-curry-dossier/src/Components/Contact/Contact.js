import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <Container className="socialContainer">
                <Card className="col-md-4">
                    <Card.Body>
                        <ListGroup className="text-dark text-center" variant="flush">
                            <ListGroup.Item className="socialPhone"><a href="tel:913-967-9154"><i class="fas fa-phone"></i></a></ListGroup.Item>
                            <ListGroup.Item className="socialEmail"><a href="mailto:carsoncurry52@gmail.com"><i class="fas fa-envelope"></i></a></ListGroup.Item>
                            <ListGroup.Item className="socialGithub"><a href="https://github.com/carsoncurry" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></ListGroup.Item>
                            <ListGroup.Item className="socialLinkedin"><a href="https://www.linkedin.com/in/carson-curry-85824598/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></ListGroup.Item>
                            <ListGroup.Item className="socialInstagram"><a href="https://www.instagram.com/carsoncurry52/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></ListGroup.Item>
                            <ListGroup.Item className="socialTwitter"><a href="https://twitter.com/CWCOriginals" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default Contact;
