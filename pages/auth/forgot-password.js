import { resetPassword } from "../../contexts/Authentication";
import { Container, Card, Form } from "react-bootstrap";
import React, { useState, useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import Head from "next/head";
import Link from "next/link";

const Forgot = () => {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();

  const handleLogIn = async () => {
    setLoading(true);
    if (!emailRef?.current?.value) {
      toast.error("Please Enter All The Credentials!");
    }
    else {
      try {
        await resetPassword(emailRef.current.value);
        toast.success(`Successfully Sent Email to ${emailRef.current.value}`, { autoClose: 6000 });
        toast.info("Please Check Your Email's Inbox!", { autoClose: 6000 });
        toast.info("Please Check Your Email's Spam Too!", { autoClose: 6000 });
      } catch (error) {
        toast.error(error.message);
      }
    }
    setLoading(false);
  }

  return (
    <div>
      <React.Fragment>
        <Head> <title> Arnav Singh - Forgot Password? </title> </Head>
        <Container className="bg-# d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h1 className='text-3xl text-center mb-4'> <span className="text-sm" > Did you just </span> Forgot Password? </h1>
                <Form>
                  <Form.Group id="email" >
                    <Form.Label className="mb-1" > E-mail: </Form.Label>
                    <Form.Control type="email" autoComplete="email" ref={emailRef} required />
                  </Form.Group>
                  <br />
                  <button disabled={loading} onClick={handleLogIn} className=" w-100 bg-blue-900  text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Send Password Reset Mail! </button>
                </Form>
                <div className="2-100 text-center mt-2" >
                  <Link href="/auth/login">Log In</Link>
                </div>
              </Card.Body>
            </Card>
            <div className="2-100 text-center mt-2" >
              Already Have A Account? <Link href="/auth/signup">Sign Up</Link>
            </div>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Forgot;