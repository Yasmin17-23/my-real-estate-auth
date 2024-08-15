import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        setUser(null);
        return signOut(auth);
    }
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
              setUser(currentUser);
            }
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const allInfos = { 
        user, 
        createUser, 
        signInUser, 
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