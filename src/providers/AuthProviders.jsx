import { useState } from "react";
import { createContext } from "react";
import {GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";


import { useEffect } from "react";
import app from "../assets/firebase/firebase.config";

export const AuthContext= createContext(null);


const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

   const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email, password )
   }
   
   const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

   const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}

   const logOut = () => {
    setLoading(true);
    return signOut(auth)
   }

   useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           console.log('user in the auth state changed', currentUser);
           setUser(currentUser);
           setLoading(false)
       });
       return () =>{
        unsubscribe();
       }
   },[])

    const authInfo = {
        signInWithGoogle,
        user,
        loading,
        createUser,
        signIn,
        logOut
    }   

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;