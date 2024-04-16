// AuthContext.js
import React, { useContext, createContext, useState, useEffect } from 'react';
import { auth } from './firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         setCurrentUser(user);
    //     });
    //     return unsubscribe;
    // }, []);
    return (
        <AuthContext.Provider value={{ username: currentUser?.email , isLogin, setIsLogin, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };