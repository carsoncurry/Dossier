import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import './Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <Container className="skillsContainer">
                <Row>
                    <ListGroup>
                        <ListGroup.Item>Front (HTML, CSS, JavaScript) and backend (Node, Express, MySQL) martial artist.</ListGroup.Item>
                        <ListGroup.Item>Library (jQuery, Vue, React) and Framework (Bootstrap, Materialize, Veutify) polyglot.</ListGroup.Item>
                        <ListGroup.Item>Digital content, organizational voice and S.E.O. wordsmith.</ListGroup.Item>
                        <ListGroup.Item>Graphic design and thematic (WordPress, Adobe Design Suite, Microsoft Office) artist.</ListGroup.Item>
                        <ListGroup.Item>Project planning (GitHub, Trello, Slack) tactician.</ListGroup.Item>
                        <ListGroup.Item>Student of new technologies, platforms and techniques every day.</ListGroup.Item>
                    </ListGroup>
                </Row>
            </Container>
        );
    }
}

export default Skills;
