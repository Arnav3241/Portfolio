import { Container, Card, Form, Button } from "react-bootstrap";
import { signUpViaEmail } from "../../contexts/Authentication";
import Notification from "../../components/Notification";
import React, { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef(); 
  const passwordConfirmRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();

    if (!emailRef.current.value || !passwordRef.current.value || !passwordConfirmRef.current.value ) { setError("Please Enter All The Credentials!"); }
    else if (passwordRef.current.value !== passwordConfirmRef.current.value) { setError("Passwords do not match") }    
    else { try { 
      setLoading(true);
      setError(""); setSuccess("");
      await signUpViaEmail(emailRef.current.value, passwordRef.current.value);
      setSuccess("Successfully Created a Account");
      Navigate("/") }
    catch (error) { setError(error.message.slice(10)) } 
    finally { setLoading(false) } }
  }

  return (
    <React.Fragment>
      {success && <Notification message={success} type="success" autoClose={3000} />}
      {error && <Notification message={error} type="error" autoClose={3000} />}
      <Head> <title> Arnav Singh - Sign Up </title> </Head>
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
                  <Form.Control type="password" autoComplete="new-password" ref={passwordConfirmRef} required />
                </Form.Group>
                <br />
                <Button disabled={loading} onClick={handleSignUp} type="submit" className="w-100 rounded-0"> Sign Up </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="2-100 text-center mt-2" >
            Already have A Account? <Link href="/auth/login">Log In</Link>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Signup;