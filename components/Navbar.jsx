import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useAuth } from "../contexts/Authentication";
import { logOut } from "../contexts/Authentication";
import styles from "./Styles/Navbar.module.css";
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarHeader = () => {
    const router = useRouter();
    const currentUser = useAuth();

    const Spacing = ({ space }) => {
        return <span style={{ marginRight: space }}></span>
    };

    async function Logout() {
        await logOut();
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand>
                        <Link href={`/`}>
                            <div style={{ cursor: "pointer" }} className={`${styles.navContainer}`}>
                                <Image alt="Logo" src="/logo.png" width={30} height={30} className={`d-inline-block ${styles.btnDown}`} />
                                <Spacing space={10} />
                                Arnav Singh
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="text-center" id="responsive-navbar-nav">
                        <Nav className="me-auto Navbar-Links">
                            <Nav.Link onClick={() => { router.push("/") }} >        Home        </Nav.Link>
                            <Nav.Link onClick={() => { router.push("/about") }} >   About       </Nav.Link>
                            <Nav.Link onClick={() => { router.push("/blogs") }} >   Blogs       </Nav.Link>
                            <Nav.Link onClick={() => { router.push("/youtube") }} > Youtube     </Nav.Link>
                            <Nav.Link onClick={() => { router.push("/contact") }} > Contact Me  </Nav.Link>
                        </Nav>
                        {/* <br /> */}
                        <Nav className="" >
                            <div>
                                {currentUser?<span style={{ color: "whitesmoke" }} >Hello { currentUser.email } </span>: null}
                                <Spacing space={10} />
                                {currentUser ? (
                                    <React.Fragment >

                                        <Button onClick={() => { router.push("/auth/user/profile") }} className="text-white" variant="light">Profile</Button>
                                        <Spacing space={10} />
                                        <Button onClick={ Logout } variant="light">Log Out</Button>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <Button onClick={() => { router.push("/auth/login") }} variant="light">Log In</Button>
                                        <Spacing space={10} />
                                        <Button onClick={() => { router.push("/auth/signup") }} variant="light">Sign Up</Button>
                                    </React.Fragment>
                                )}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            <br />
            <br />
        </>
    );
};

export default NavbarHeader;