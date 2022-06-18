import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, auth } from "./FIrebaseConfig"


// A Authentication Function To Create User via Email and Password
const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

// A Authentication Function To Log In User via Email and Password
const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

// A Authentication Function To Log Out User via Email and Password
const logOut = () => {
    return signOut(auth);
};

// A Authentication Function To Reset Password via Email
const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
}

const useAuth = () => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unSubscribe;
    }, []);

    return currentUser;
};

const getData = async (uid) => {
    try {
        const Query = query(collection(db, "users"), where("Uid", "==", uid));
        const Document = await getDocs(Query);
        return Document.docs[0].data();
    } catch (err) { console.log(err) }
}

export { useAuth, logIn, logOut, getData, signUp, resetPassword };