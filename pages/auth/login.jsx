import Head from "next/head";
import React, { useState, useRef } from "react";
import Notification from "../../components/Notification";
import { Container, Card, Form } from "react-bootstrap";
import Link from "next/link";

const login = () => {
  const emailRef = useRef();
  const passwordRef = useRef(); 
  const passwordConfirmRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState("");

  const handleLogIn = async () => {

  }

  return (
    <div>
      <Head> <title> Arnav Singh - login </title> </Head>
      <React.Fragment>
        {success && <Notification message={success} type="success" autoClose={3000} />}
        {error && <Notification message={error} type="error" autoClose={3000} />}
        <Head> <title> Arnav Singh - Sign Up </title> </Head>
        <Container className="bg-# d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h1 className='text-3xl text-center mb-4'> Sign Up </h1>
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
                    <Form.Control type="password" autoComplete="new-password" ref={passwordConfirmRef} required />
                  </Form.Group>
                  <br />
                  <button disabled={loading} onClick={handleLogIn} type="submit" className=" w-100 bg-blue-900  text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Sign Up </button>
                </Form>
              </Card.Body>
            </Card>
            <div className="2-100 text-center mt-2" >
              Already have a Account? <Link href="/auth/login">Log In</Link>
            </div>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default login;