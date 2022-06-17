import { signUp } from "../../contexts/Authentication";
import { Container, Card, Form } from "react-bootstrap";
import { toast } from "react-toastify"
import React, { useState, useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import Link from "next/link";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!emailRef.current.value || !nameRef.current.value || !passwordRef.current.value || !passwordConfirmRef.current.value) {
      toast.error("Please Enter All The Credentials!");
    }
    else if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      toast.error("Passwords do not match");
    }
    else {
      try {
        const result = await signUp( emailRef.current.value, passwordRef.current.value);
        const user = result.user;
        await addDoc(collection(db, "users"), {
          Uid: user.uid,
          Name: nameRef.current.value,
          Auth_Provider: ("Arnav Singh's Portfolio!"),
          Email: emailRef.current.value,
          Created_At: String(new Date())
        });
        toast.success("Successfully Created a Account");
      } catch (error) {
        toast.error(error.message)
      }
    }
    setLoading(false);
  }

  return (
    <React.Fragment>
      <Head> <title> Arnav Singh - Sign Up </title> </Head>
      <Container className="bg-# d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h1 className='text-3xl text-center mb-4'> Sign Up </h1>
              <Form>
                <Form.Group id="User Name" >
                  <Form.Label className="mb-1" > Name: </Form.Label>
                  <Form.Control type="text" autoComplete="name" ref={nameRef} required />
                </Form.Group>
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
                <button disabled={loading} onClick={handleSignUp} type="submit" className=" w-100 bg-blue-900  text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Sign Up </button>
              </Form>
            </Card.Body>
          </Card>
          <div className="2-100 text-center mt-2" >
            Already have a Account? <Link href="/auth/login">Log In</Link>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Signup;