import Link from "next/link";
import Head from 'next/head';
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Head>
        <title> Arnav Singh - Home </title>
        <meta name='author' content='Arnav Singh' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
      </Head>
      {/* wqiedb */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
            <Button variant="dark">Dark</Button><span>  </span>
            <Button variant="dark" className="ml-2">Dark</Button>
        </Container>
      </Navbar>
      {/* idc */}
      <h1>
        Portfolio
      </h1>
      <Link href="/about">Hi</Link>
    </div>
  );
};

export default Home;