import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';

const Navbar1 = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">TodoApp</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Navbar1;