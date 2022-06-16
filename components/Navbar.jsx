import { logOut, getData, useAuth } from "../contexts/Authentication";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./Styles/Navbar.module.css";
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavbarHeader = () => {
    const router = useRouter();
    const user = useAuth();
    const [displayName, setDisplayName] = useState("");

    const Spacing = ({ space }) => {
        return <span style={{ marginRight: space }}></span>
    };

    async function Logout() {
        await logOut();
    }

    if (user) {
        const Data = Promise.resolve(getData(user.uid));
        Data.then(data => {
            setDisplayName(data.Name);
        })
    }

    return (
        <React.Fragment>
            <Navbar className="Navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
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
                                {user ? <span style={{ color: "whitesmoke" }} >Hello {displayName}! </span> : null}
                                <Spacing space={10} />
                                {user ? (
                                    <React.Fragment >

                                        <button onClick={() => { router.push("/auth/user/profile") }} className="bg-blue-900 hover:bg-blue-900 text-white font-semibold  py-2 px-4 border border-blue-500  rounded" variant="light">Profile</button>
                                        <Spacing space={10} />
                                        <button onClick={Logout} variant="light" className="bg-blue-900 hover:bg-blue-900 text-white font-semibold  py-2 px-4 border border-blue-500  rounded">Log Out</button>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <button onClick={() => { router.push("/auth/login") }} variant="light" className="bg-blue-900 hover:bg-blue-900 text-white font-semibold  py-2 px-4 border border-blue-500  rounded">Log In</button>
                                        <Spacing space={10} />
                                        <button onClick={() => { router.push("/auth/signup") }} variant="light" className="bg-blue-900 hover:bg-blue-900 text-white font-semibold  py-2 px-4 border border-blue-500  rounded">Sign Up</button>
                                    </React.Fragment>
                                )}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br /> <br /> <br />
        </React.Fragment>
    );
};

export default NavbarHeader;