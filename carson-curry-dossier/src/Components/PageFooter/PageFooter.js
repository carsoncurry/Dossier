import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import './PageFooter.css';

const PageFooter = props => (
        <Navbar className="pageFooter bg-dark text-light justify-content-center" fixed="bottom">
                <Row>
                        Carson Curry © 2019
                        <a href="tel:913-967-9154"><i class="fas fa-phone"></i></a> | 
                        <a href="mailto:carsoncurry52@gmail.com"><i class="fas fa-envelope"></i></a> | 
                        <a href="https://github.com/carsoncurry" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a> | 
                        <a href="https://www.linkedin.com/in/carson-curry-85824598/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a> | 
                        <a href="https://www.instagram.com/carsoncurry52/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a> | 
                        <a href="https://twitter.com/CWCOriginals" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                </Row>
        </Navbar>
)

export default PageFooter;
