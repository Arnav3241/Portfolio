// import { Navbar as NB, Nav, Button, NavDropdown } from "react-bootstrap";
// import useMediaQuery from "../contexts/CheckScreenSize";
import styles from "./Styles/Navbar.module.css";
// import { useRouter } from 'next/router';
// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import React from "react";

// const Navbar = () => {
//     const [userImg, setUserImg] = useState(`/Default-Avatar.png`);
//     const isSmallDevice = useMediaQuery(968);
//     const currentUser = useAuth();
// import { useRouter } from 'next/router';

//     const Spacing = ({ space }) => {
//         return <span style={{ marginRight: space }}></span>
//     };


//     return (
//         <React.Fragment>
//             <NB collapseOnSelect expand={`lg`} bg={`dark`} variant={`dark`} className={`${styles.Navbar}`}>
//                 <NB.Brand style={{ marginLeft: 50 }} >
//                     <Link href="/" style={{ color: "whitesmoke" }} >
//                         Arnav Singh
//                     </Link>
//                 </NB.Brand>
//                 <NB.Toggle aria-controls={`responsive-navbar-nav`} />
//                 <NB.Collapse id={`responsive-navbar-nav`} variant={`dark`}>
//                     <Nav className={`me-auto`} style={{ textAlign: `center` }} >
//                         <span className={`${styles.Link2}`}> <Link href={`/about`} className={`text-light`} >   About       </Link>  </span>
//                         <span className={`${styles.Link2}`}> <Link href={`/blogs`} className={`text-light`} >   Blogs       </Link>  </span>
//                         <span className={`${styles.Link2}`}> <Link href={`/contact`} className={`text-light`} > Contact Me  </Link>  </span>
//                         <span className={`${styles.Link2}`}> <Link href={`/youtube`} className={`text-light`} > Youtube     </Link>  </span>
//                     </Nav>
//                     <Nav style={{ marginRight: 50, textAlign: "center" }} >
//                         {currentUser ? (
//                             <React.Fragment >
//                                 {isSmallDevice ? null : (<Image className={`navbarUserImg ${styles.avatar}`} height={40} width={55} src={userImg} alt={`User's Default Pic`} />)}
//                                 <div style={{ width: "100vw" }} >
//                                     <Button className={`${styles.Btn}`} variant={`light`} >Pofile</Button>
//                                     <Spacing space={10} />
//                                     <Button variant={`light`} >Log Out</Button>
//                                 </div>
//                             </React.Fragment>
//                         ) : (
//                             <React.Fragment>
//                                 <Button variant={`light`} >Log In</Button>
//                                 <Button variant={`light`} >Log In</Button>

//                             </React.Fragment>
//                         )}
//                         {/* { currentUser? (
//                                 <React.Fragment>
//                                         <span className={`${styles.Greeting}`} style={{ color: "white" }} > Hello @
//                                             <span style={{ fontSize: 14 }} >{currentUser.email} </span> 
//                                         </span>
//                                         <Spacing space={20} />
//                                         <Spacing space={20} />

//                                         <span textAlign="center" ><Button variant={`light`} style={{ width: '50%' }}> Profile </Button></span>
//                                         <Spacing space={10} /> <br />
//                                         <Button variant={`light`} style={{ width: '50%' }}> Log Out </Button>
//                                 </React.Fragment>
//                             ) : (
//                                 <React.Fragment>
//                                     <Button variant={`light`} style={{ width: '50%' }}> Log In </Button>
//                                     <Spacing space={10} />
//                                     <Button variant={`light`} style={{ width: '50%' }}> Sign Up </Button>

//                                 </React.Fragment>
//                             )}
//                          /}
//                     </Nav>
//                 </NB.Collapse>
//             </NB> <br /><br /><br />
//         </React.Fragment>
//     );
// };

// export default Navbar;
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useAuth } from "../contexts/Authentication";
import { useRouter } from 'next/router';
import React from "react";

const NavbarHeader = () => {
    const router = useRouter();
    const currentUser = useAuth();

    const Spacing = ({ space }) => {
        return <span style={{ marginRight: space }}></span>
    };

    const Logout = () => {

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

                                        <Button onClick={() => { router.push("/auth/user/profile") }} variant="light">Profile</Button>
                                        <Spacing space={10} />
                                        <Button onClick={ Logout } variant="light">Log Out</Button>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <Button onClick={() => { router.push("/login") }} variant="light">Log In</Button>
                                        <Spacing space={10} />
                                        <Button onClick={() => { router.push("/signup") }} variant="light">Sign Up</Button>
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