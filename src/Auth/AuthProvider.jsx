import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config';
import axios from 'axios';

export const MyContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvide = new GoogleAuthProvider();

    const passwordRegistration = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvide)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            const userInfo = {
                name: 'Aonymas',
                email: currentUser.reloadUserInfo?.email,
                role: 'user',
            }
            const res = axios.post('http://localhost:5000/user', userInfo);
            console.log(res.data);
        })
        return (() => {
            unSubscribe();
        })
    }, [])

    const contenxtProperty = {
        user,
        loading,
        passwordRegistration,
        logIn,
        googleLogin,
        logOut,
    }

    return (
        <MyContext.Provider value={contenxtProperty}>
            {children}
        </MyContext.Provider>
    )
}

export default AuthProvider