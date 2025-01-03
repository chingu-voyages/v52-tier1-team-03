import React, { createContext, useState, useEffect } from "react";
import { auth } from "../auth/firebase/firebase.config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children} {/* This will render the components passed to AuthProvider */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
