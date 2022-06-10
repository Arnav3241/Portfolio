import { Container, Navbar as NB , Button, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <React.Fragment>
            <NB collapseOnSelect expand="lg" bg="dark"variant="dark">
                    <NB.Brand style={{ marginLeft: 50 }} >React-Bootstrap</NB.Brand>
                    <NB.Toggle aria-controls="responsive-navbar-nav" />
                    <NB.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="active" >Features</Nav.Link>
                            <Nav.Link >Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item>Action</NavDropdown.Item>
                                <NavDropdown.Item>Another action</NavDropdown.Item>
                                <NavDropdown.Item>Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </NB.Collapse>
                        <Nav>
                            <Button variant="light"> Login </Button>
                            <Button variant="light" style={{ marginLeft: 5 }} > Sign Up </Button>
                            <Image src="/Default-Avatar.png" className="avatar" width="50" height="45" alt="CoolBrand"></Image>
                        </Nav>
            </NB>
        </React.Fragment>
    );
};

export default Navbar;