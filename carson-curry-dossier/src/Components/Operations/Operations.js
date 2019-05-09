import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import './Operations.css';

class Operations extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };

        this.handleShow = () => {
            this.setState({ show: true });
        };

        this.handleHide = () => {
            this.setState({ show: false });
        };
    }
        
    render() {
        return (
            <Container className="operationsContainer">
                <Row className="justify-content-center">
                    <Button className="btn-lg" variant="dark" onClick={this.handleShow}>
                        Operations Reports
                    </Button>

                    <Modal
                        show={this.state.show}
                        onHide={this.handleHide}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header className="bg-dark" closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Past Projects
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Project Gallery Goes Here</p>
                        </Modal.Body>
                    </Modal>
                </Row>
            </Container>
        );
    }
}

export default Operations;
