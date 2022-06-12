import { Navbar as NB, Nav, Button  } from "react-bootstrap";
import { useAuth } from "../contexts/Authentication"
import styles from "./Styles/Navbar.module.css";
import useMediaQuery from "../contexts/CheckScreenSize"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const Navbar = () => { 
    const isSmallDevice = useMediaQuery(600);
    const [ userImg, setUserImg ] = useState(`/Default-Avatar.png`)
    const currentUser = useAuth()

    return (
        <React.Fragment>
            <NB collapseOnSelect expand={`lg`} bg={`dark`} variant={`dark`} className={`${styles.Navbar}`}>
                <NB.Brand style={{ marginLeft: 50 }} >
                    <Link href="/" style={{ color: "whitesmoke" }} >
                        Arnav Singh
                    </Link>
                </NB.Brand>
                <NB.Toggle aria-controls={`responsive-navbar-nav`} />
                <NB.Collapse id={`responsive-navbar-nav`} variant={`dark`}>
                    <Nav className={`me-auto`} style={{ textAlign: `center` }} >
                        <span className={`${styles.Link1}`}> <Link href={`/`} className={`text-light`} > Home </Link>  </span> 
                        <span className={`${styles.Link2}`}> <Link href={`/about`} className={`text-light`} > About </Link>  </span> 
                        <span className={`${styles.Link2}`}> <Link href={`/about`} className={`text-light`} > Blogs </Link>  </span>
                        <span className={`${styles.Link2}`}> <Link href={`/about`} className={`text-light`} > Contact Me </Link>  </span>
                    </Nav>
                    <Nav style={{ marginRight: 50 }} >
                        { currentUser? (
                                <React.Fragment>
                                    <span className={`${styles.Greeting}`} style={{ color: "white" }} > Hello @
                                        <span style={{ fontSize: 14 }} >{currentUser.email } </span> 
                                    </span>
                                    <span style={{ marginRight: 20 }}></span>
                                    {isSmallDevice ? null : (                              
                                    <Image 
                                        className={`navbarUserImg ${styles.avatar}`} 
                                        height={40} 
                                        width={55} 
                                        src={userImg}  
                                        alt={`User's Default Pic`} 
                                    />)}
                                </React.Fragment>
                            ) : (
                                <React.Fragment>

                                </React.Fragment>
                            )
                        }
                        <span style={{ marginRight: 20 }}></span>
                        <Button variant={`light`}> Log Out </Button>
                        {/* <Button className={`${styles.navbarBtns}`} variant={`light`}> Sign In </Button> */}
                        
                    </Nav>
                </NB.Collapse>
            </NB>
            <br/>
            <br/>
            <br/>
            {/* <NB collapseOnSelect expand={`lg`} bg={`dark`} variant={`dark`}>
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
                        <div style={{ color: "white", marginTop: 8 }} >{ isSmallDevice ? (<div>small</div>) : ( <div> Big</div>) }</div>
                        <span style={{ marginTop: 8 }}></span>
                        {isSmallDevice?(<span></span>):<div style={{ paddingTop: 0, paddingBlock: 0, marginTop: 2, marginBottom: -6 }} >
                            <Image 
                                className={`navbarUserImg ${styles.avatar}`} 
                                height={40} 
                                width={55} 
                                src={`/Default-Avatar.png`}  
                                alt={`User's Default Pic`} 
                            />
                        </div>}
                        <Button className={`${styles.navbarBtns}`} variant={`light`}> Login </Button>        <span style={{ height: 2 }} />
                        <Button className={`${styles.navbarBtns}`} variant={`light`}> Sign Up </Button>      <span style={{ height: 2 }} />
                    </Nav>
                </NB.Collapse>
            </NB> */}
        </React.Fragment>
    );
};

export default Navbar;