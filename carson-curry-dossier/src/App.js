import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from './ThemeContext';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import Row from 'react-bootstrap/Row';
import './App.css';
import Blog from './Components/Blog/Blog';
import Personnel from './Components/Personnel/Personnel';
import Profile from './Components/Profile/Profile';
import Operations from './Components/Operations/Operations';
import Skills from './Components/Skills/Skills';

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100%;
  height: 100%;
  h2, h3, h5, h6, p {
    color: ${props => props.theme.body};
  };
`;

const App = () => {
  const themeState = useTheme();

  return (
      <Wrapper>
        <Navbar className="pageHeader justify-content-end" fixed="top">
          <NavItem>
            <div>
              <Button className="bg-dark switchButton" onClick={() => themeState.toggle()}>
                {themeState.dark ? "Tuxedo" : "Stealth Mode"}
              </Button>
            </div>
          </NavItem>
        </Navbar>
        <Profile />
        <Personnel />
        <Skills />
        <Operations />
        <Blog />
        <Navbar className="pageFooter bg-dark text-light justify-content-center" sticky="bottom">
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
      </Wrapper>
  );
};

export default App;
