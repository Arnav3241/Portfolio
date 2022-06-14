import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
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