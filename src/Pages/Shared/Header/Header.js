import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>

            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home" ><img src={logo} height={30} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home#home">Home</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#expert">Expert</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {
                                user ? <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                                    : <Nav.Link as={Link} to="/login">
                                        LogIn
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </>
    );
};

export default Header;