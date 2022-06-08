import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyB5_DQAefwODkzDAC64sTHWrnWwFjoog1A",
    authDomain: "auth-production-b3b26.firebaseapp.com",
    projectId: "auth-production-b3b26",
    storageBucket: "auth-production-b3b26.appspot.com",
    messagingSenderId: "977237570540",
    appId: "1:977237570540:web:f3f2ddfc93cea6e95306c9"
};

initializeApp(firebaseConfig);

const auth = getAuth();

const signUpViaEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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

export { useAuth, signUpViaEmail, logInViaEmail, logOut };