import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Header = () => {
  const navigate = useNavigate();  // Hook for navigation

  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand
                  style={{ cursor: 'pointer' }}  // This will change the cursor to pointer on hover
                  onClick={() => navigate('/')}  // Navigate to the home page
                >
                  <img src={logo} alt="Proshop"/>
                  Proshop
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                          style={{ cursor: 'pointer' }}  // Changing cursor on hover
                          onClick={() => navigate('/cart')}  // Navigate to Cart
                        >
                          <FaShoppingCart /> Cart
                        </Nav.Link> 
                        <Nav.Link
                          style={{ cursor: 'pointer' }}  // Changing cursor on hover
                          onClick={() => navigate('/login')}  // Navigate to Login
                        >
                          <FaUser /> Sign In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

export default Header;
