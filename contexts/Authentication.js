import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, auth } from "./FIrebaseConfig"

const signUpViaEmail = async (name, email, password, passwordConfirm, setSuccess, setError, setLoading, Router) => {
    setLoading(true);
    if (!email.current.value || !name.current.value || !password.current.value || !passwordConfirm.current.value ) { setError("Please Enter All The Credentials!"); }
    else if (password.current.value !== passwordConfirm.current.value) { setError("Passwords do not match") }    
    else { try { 
      setError(""); 
      setSuccess("");
      const result = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
      const user = result.user;
      await addDoc(collection(db, "users"), {
        Uid: user.uid,
        Name: name.current.value,
        Auth_Provider: ("Arnav Singh's Portfolio!"),
        Email: email.current.value,
        Created_At: String(new Date())
      })
      setSuccess("Successfully Created a Account");
      Router.push("/")
    }
    catch (error) { alert(`${error}`) } 
    finally { setLoading(false) }}
    setLoading(false)
};

const logInViaEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const logOut = () => {
    return signOut(auth);
};

const useAuth = () => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unSubscribe;
    }, []);

    return currentUser;
};

const getData = async (uid) => {
    
    const Query = query(collection(db, "users"), where("Uid", "==", uid));
    const Document = await getDocs(Query);
    return Document.docs[0].data();
}

export { useAuth, signUpViaEmail, logInViaEmail, logOut, getData };