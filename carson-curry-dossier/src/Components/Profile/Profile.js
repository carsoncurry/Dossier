import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import './Profile.css';

const Profile = props => (
    <Jumbotron className="bg-dark">
        <Container>
            <Row>
                <Col md={6}>
                    <div className="profileInfo text-light">
                        <h1>PROFILE</h1>
                        <hr />
                        <h4>NAME: Carson Curry</h4>
                        <h4>BASE OF OPERATIONS: Kansas City</h4>
                        <h4>ABLE TO RELOCATE: Yes</h4>
                        <h4>TRAINING: Level 7</h4>
                        <h4>STATUS: Active</h4>
                    </div>
                </Col>
                <Col md={6}>
                    <Image href="./ProfilePic.png" alt="Profile" />
                </Col>
            </Row>
        </Container>
    </Jumbotron>
)

export default Profile;
