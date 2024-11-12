import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TheNavbar = () => {
  const [show, setShow] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);



  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar
      bg="transparent" 
      variant="dark"
      expand="lg"
      fixed="top"
      className={`text-white ${show ? '' : 'd-none'}`} 
    >
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('about')} className="me-3">
              About
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('tracks')} className="me-3">
              Tracks
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('speaker')} className="me-3">
              Speaker
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('schedule')} className="me-3">
              Schedule
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('faq')} className="me-3">
              FAQ
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('sponsors')} className="me-3">
              Sponsors
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <style>
        {`
          @media (max-width: 992px) {
            .navbar-collapse {
              background-color: black !important; /* Set white background for dropdown */
            }
          }
        `}
      </style>
    </Navbar>
  );
};
