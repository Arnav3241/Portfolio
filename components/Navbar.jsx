import { Navbar as NB, Button, Nav, MenuItem, NavDropdown } from "react-bootstrap";
import useMediaQuery from "../contexts/CheckScreenSize";
import styles from "./Styles/Navbar.module.css";
import Image from "next/image";
import { useAuth } from "../contexts/Authentication"
import Link from "next/link";
import React from "react";



const Navbar = () => { 
    const isSmallDevice = useMediaQuery(991)
    const currentUser = useAuth()

    return (
        <React.Fragment>
            <NB collapseOnSelect expand={`lg`} bg={`dark`} variant={`dark`}>
                <NB.Brand style={{ marginLeft: 160 }} >React-Bootstrap</NB.Brand>
                <NB.Toggle aria-controls={`responsive-navbar-nav`} />
                <NB.Collapse id={`responsive-navbar-nav`} variant={`dark`}>
                    <Nav className={`me-auto`} style={{ textAlign: "center" }} >
                        <Nav.Link> <Link href={`/about`}style={{ width: "100%", height: "100%" }} > About </Link> </Nav.Link>
                        <Nav.Link> <Link href={`/about`}style={{ width: "100%", height: "100%" }} >About </Link>  </Nav.Link>
                        <NavDropdown style={{ color: "#0de6fd" }} title={`Dropdown`} id={`collasible-nav-dropdown`} className={`dropdown-menu-dark`}>
                            <NavDropdown.Item style={{ textAlign: "center" }} >  <Link href={`/about`} > About </Link>  </NavDropdown.Item>
                            <NavDropdown.Item style={{ textAlign: "center" }} >  <Link href={`/about`} > About </Link>  </NavDropdown.Item>
                            <NavDropdown.Item style={{ textAlign: "center" }} >  <Link href={`/about`} > About </Link>  </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item style={{ textAlign: "center" }} >  <Link href={`/about`} style={{ width: "100%", height: "100%" }} > About </Link>  </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav style={{ textAlign: "center" }} >
                        {currentUser?
                            <span style={{ color: "white", marginTop: 8 }}>Hello @{currentUser.email}</span>
                                :
                            <span >Hello User</span>
                        }
                        <div style={{ color: "white", marginTop: 8 }} >{ isSmallDevice ? (<div>small</div>) : ( <div> Big</div>) }</div>
                        <span style={{ marginTop: 8 }}></span>
                        {isSmallDevice?(<span></span>):<div style={{ paddingTop: 0, paddingBlock: 0, marginTop: 2, marginBottom: -6 }} >
                            <Image 
                                className={`navbarUserImg ${styles.avatar}`} 
                                height={isSmallDevice?100:40} 
                                width={isSmallDevice?120:55} 
                                src={`/Default-Avatar.png`}  
                                alt={`User's Default Pic`} 
                            />
                        </div>}
                        <Button className={`${styles.navbarBtns}`} variant={`light`}> Login </Button>        <span style={{ height: 2 }} />
                        <Button className={`${styles.navbarBtns}`} variant={`light`}> Sign Up </Button>      <span style={{ height: 2 }} />
                        <Button className={`${styles.navbarBtns}`} variant={`light`}> Log Out </Button>
                    </Nav>
                </NB.Collapse>
            </NB>
        </React.Fragment>
    );
};

export default Navbar;