import { useState, useEffect } from "react";
import { firebaseApp } from "../lib/firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(firebaseApp);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  // const signInWithEmailAndPasswordFirebase = (email, password) =>
  //   signInWithEmailAndPassword(email, password);

  // const createUserWithEmailAndPasswordFirebase = (email, password) =>
  //   createUserWithEmailAndPassword(email, password);

  // const signOutFirebase = () => signOut().then(clear);

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const disconnect = () => signOut(auth).then(clear);
  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, [auth]);

  return {
    authUser,
    loading,
    createUser,
    disconnect,
  };
}
