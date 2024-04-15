// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth } from './firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    return (
        <AuthContext.Provider value={{ username: currentUser?.email , isLogin, setIsLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };