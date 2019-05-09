import React from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import './Skills.css';

class Skills extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    render() {
        const { open } = this.state;
        return (
            <Container className="skillsContainer">
                <Row>
                    <Button
                        className="skillsButton btn-lg bg-dark"
                        onClick={() => this.setState({ open: !open 
                    })}
                        aria-controls="example-collapse-text"
                        aria-expanded={ open }
                    >
                        Skills / Abilities
                    </Button>
                </Row>
                <Row>
                    <Collapse in={this.state.open}>
                        <div id="collapse-text">
                            <ListGroup>
                                <ListGroup.Item>Front (HTML, CSS, JavaScript) and backend (Node, Express, MySQL) martial artist.</ListGroup.Item>
                                <ListGroup.Item>Library (jQuery, Vue, React) and Framework (Bootstrap, Materialize, Veutify) polyglot.</ListGroup.Item>
                                <ListGroup.Item>Digital content, organizational voice and S.E.O. wordsmith.</ListGroup.Item>
                                <ListGroup.Item>Graphic design and thematic (WordPress, Adobe Design Suite, Microsoft Office) artist.</ListGroup.Item>
                                <ListGroup.Item>Project planning (GitHub, Trello, Slack) tactician.</ListGroup.Item>
                                <ListGroup.Item>Student of new technologies, platforms and techniques every day.</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Collapse>
                </Row>
            </Container>
        );
    }
}

export default Skills;
