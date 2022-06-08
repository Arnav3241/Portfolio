import { Container, Card, Form, Button } from "react-bootstrap";
import Head from "next/head";
import {  } from "react";

const logIn = () => {
  return (
    <div className="logIn">
        <Head> <title> Arnav Singh - Log In </title> </Head>
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh'}}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className='text-center mb-4'> Sign Up </h2>
                    </Card.Body>
                </Card>
            </div>
        </Container>
      logIn
    </div>
  );
};

export default logIn;