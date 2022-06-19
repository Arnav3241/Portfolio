import { logIn, useAuth, getData } from "../../contexts/Authentication";
import { Container, Card, Form } from "react-bootstrap";
import React, { useState, useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router"
import { toast } from "react-toastify";
import Head from "next/head";
import Link from "next/link";


const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const user = useAuth();
  const router = useRouter();

  if (user) {
    const Data = Promise.resolve(getData(user.uid));
    Data.then(data => {
      setDisplayName(data.Name);
    })
  }

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
    <React.Fragment>
      <Head> <title> Arnav Singh - Log In </title> </Head>
      <Container className="bg-# d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {!user ? <React.Fragment>
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
                  <button disabled={loading} onClick={handleLogIn} className=" w-100 bg-blue-900  text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Log In </button>
                </Form>
                <div className="2-100 text-center mt-2" >
                  <Link href="/auth/forgot-password">Forgot Password?</Link>
                </div>
              </Card.Body>
            </Card>
            <div className="2-100 text-center mt-2" >
              Already Have A Account? <Link href="/auth/signup">Sign Up</Link>
            </div>
          </React.Fragment>
            :
            <React.Fragment>
              <Card>
                <Card.Body className="text-center" >
                  <h1 className='text-3xl text-center mb-4'> Welcome {displayName} </h1>
                  <h2> You can&apos;t access this page right now as you are already logged in as {displayName} with email id: {user.email}. </h2>
                  <br />
                  <div className="flex justify-center content-center">
                    <button onClick={() => { router.push("/") }} className="bg-blue-900 text-white border-0 py-2 px-6 focus:outline-none rounded-1 text-lg"> Dashboard </button>
                    <button onClick={() => { router.push("/pages/courses") }} className="ml-4 bg-blue-900 text-white  border-2 border-black py-2 px-6 rounded-1 text-lg"> Courses </button>
                  </div>
                </Card.Body>
              </Card>
            </React.Fragment>}

        </div>
      </Container>
    </React.Fragment>
  );
};

export default Login;