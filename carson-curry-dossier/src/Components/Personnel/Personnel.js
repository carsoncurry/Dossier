import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Personnel.css';

class Personnel extends React.Component {
    render() {
        return (
            <Container className="personnelContainer">
                <Row>
                    <p>
                        Content creator, designer and developer currently navigating the many mediums of the digital landscape utilizing a background in creative writing, editing, marketing, social media management and web development. 
                        A passion for creativity and adaptability across project types of varying size and scope with a skill in creating unique products ideally suited for each project. 
                        A writer and designer always looking to create something new and exciting. 
                        A team player and self-starter ready to break new ground. 
                    </p>
                </Row>
            </Container>
        );
    }
}

export default Personnel;
