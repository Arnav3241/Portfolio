import { Container, Card, Form } from "react-bootstrap";
import { logIn } from "../../contexts/Authentication";
import React, { useState, useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import Head from "next/head";
import Link from "next/link";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleLogIn = async () => {
    setLoading(true);
    if (!emailRef?.current?.value || !passwordRef?.current?.value) {
      toast.error("Please Enter All The Credentials!");
    }
    else {
      try {
        await logIn(emailRef?.current?.value, passwordRef?.current?.value);
        toast.success("Successfully Loged In to your Account");
      } catch (error) {
        toast.error(error.message);
      }
    }
    setLoading(false);
  }

  return (
    <div>
      <Head> <title> Arnav Singh - login </title> </Head>
      <React.Fragment>
        <Head> <title> Arnav Singh - Sign Up </title> </Head>
        <Container className="bg-# d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h1 className='text-3xl text-center mb-4'> Log In </h1>
                <Form>
                  <Form.Group id="email" >
                    <Form.Label className="mb-1" > E-mail: </Form.Label>
                    <Form.Control type="email" autoComplete="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password" >
                    <Form.Label className="mt-2 mb-1"> Password: </Form.Label>
                    <Form.Control type="password" autoComplete="new-password" ref={passwordRef} required />
                  </Form.Group>
                  <br />
                  <button disabled={loading} onClick={handleLogIn} className=" w-100 bg-blue-900  text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Sign Up </button>
                </Form>

                <div className="2-100 text-center mt-2" >
                  <Link href="/auth/forgot-password">Forgot Password?</Link>
                </div>
              </Card.Body>
            </Card>
            <div className="2-100 text-center mt-2" >
              Already Have A Account? <Link href="/auth/signin">Sign In</Link>
            </div>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Login;