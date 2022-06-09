import { Container, Card, Form, Button } from "react-bootstrap";
import React, { useState, useRef } from "react";
import Notification from "../../components/Notification";
import Head from "next/head";
import Link from "next/link";

const signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [Loading, setLoading] = useState(false);
  const [Success, setSuccess] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    setSuccess("You Clicked A Button");
  }

  return (
    <div className="logIn">
      {Success && <Notification message={Success} type="success" autoClose={3000} />}
      <Head> <title> Arnav Singh - Log In </title> </Head>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className='text-center mb-4'> Sign Up </h2>
              <Form>
                <Form.Group id="email" >
                  <Form.Label className="mb-1" > E-mail: </Form.Label>
                  <Form.Control type="email" autoComplete="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password" >
                  <Form.Label className="mt-2 mb-1"> Password: </Form.Label>
                  <Form.Control type="password" autoComplete="new-password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="confirm-password" >
                  <Form.Label className="mt-2 mb-1" > Confirm Password: </Form.Label>
                  <Form.Control type="password" autoComplete="new-password" ref={confirmPasswordRef} required />
                </Form.Group>
                <br />
                <Button disabled={Loading} onClick={handleSignUp} type="submit" className="w-100 rounded-0"> Sign Up </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="2-100 text-center mt-2" >
            Already have A Account? <Link href="/auth/login">Log In</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default signup;