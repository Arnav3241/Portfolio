import { signUp, useAuth, getData } from "../../contexts/Authentication";
import { Container, Card, Form } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../contexts/FIrebaseConfig";
import React, { useState, useRef } from "react";
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import Head from "next/head";
import Link from "next/link";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
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
        const result = await signUp(emailRef.current.value, passwordRef.current.value);
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
          {!user ? <React.Fragment>
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
          </React.Fragment>
            :
            <React.Fragment>
              <Card>
                <Card.Body className="text-center" >
                  <h1 className='text-3xl text-center mb-4'> Welcome {displayName} </h1>
                  <h2> You can&apos;t access this page right now as you are already logged in as {displayName} with email id: {user.email}. </h2>
                  <br />
                  <div className="flex justify-center content-center">
                    <button onClick={() => { router.push("/pages/courses") }} className="bg-blue-900 text-white border-0 py-2 px-6 focus:outline-none rounded-1 text-lg"> Dashboard </button>
                    <button onClick={() => { router.push("/pages/blogs") }} className="ml-4 bg-blue-900 text-white  border-2 border-black py-2 px-6 rounded-1 text-lg"> Courses </button>
                  </div>
                </Card.Body>
              </Card>
            </React.Fragment>
          }
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Signup;