import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, 
    signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //console.log(user);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    
    const logOut = () => {
        setUser(null);
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
              setUser(currentUser);
              setLoading(false);
             
            }
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const allInfos = { 
        user, 
        loading,
        createUser, 
        updateUserProfile,
        signInUser, 
        googleLogin,
        githubLogin,
        logOut 
      }
    return (
        <AuthContext.Provider value={allInfos}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;