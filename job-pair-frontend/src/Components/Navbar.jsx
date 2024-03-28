import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../Assets/Job-pair-small 1.png'; // Import the image here
import '../Styles/Navbar.css'; // Make sure to create a corresponding CSS file

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false); // State to manage mobile menu visibility

    const handleToggle = () => {
        setExpanded(!expanded); // Toggle mobile menu visibility
    };

    const buttons = [
        { id: 'jobs', text: 'Jobs' },
        { id: 'interviews', text: 'Interviews' },
        { id: 'tracking', text: 'Tracking' },
        { id: 'profile', text: 'Profile' },
        { id: 'chat', text: 'Chat' }
    ];

    return (
        <Navbar expand="lg" className="navbar">
            <Navbar.Brand href="#">
                <img src={logo} alt='Brand logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {buttons.map((button) => (
                        <Nav.Link key={button.id} href={'/' + button.id}>
                            {button.text}
                        </Nav.Link>
                    ))}
                </Nav>
                <Nav>
                    <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
