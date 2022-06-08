import Head from "next/head";
import { signUpViaEmail } from "../../contexts/Authentication";

const signUp = () => {
  return (
    <div className='signUp' >
      <Head>
        <title>
          Arnav Singh - Sign Up
        </title>
      </Head>
    </div>
  );
};

export default signUp;
