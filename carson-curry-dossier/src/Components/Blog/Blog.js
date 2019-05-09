import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import './Blog.css';

const renderTooltip = props => (
    <div
        {...props}
        style={{
            padding: '2px 10px',
            color: 'red',
            borderRadius: 3,
            ...props.style,
        }}
    >
        Blog Articles (Coming Soon)
    </div>
);

const Blog = () => (
    <Container className="blogContainer">
        <Row className="justify-content-center">
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={ renderTooltip }
            >
                <Button className="btn-lg" variant="dark">Casefile Debriefings</Button>
            </OverlayTrigger>
        </Row>
    </Container>
);

export default Blog;
