import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const App = initializeApp(firebaseConfig);
const db = getFirestore(App);
const auth = getAuth(App);


const signUpViaEmail = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        console.log(user);
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
        });
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
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