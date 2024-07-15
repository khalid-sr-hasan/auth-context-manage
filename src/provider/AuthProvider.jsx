import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const userProfileUpdate = (newUser, name) => {
        return updateProfile(newUser, {
            displayName: name,
        });
    };

    useEffect(() => {
        const unSubscription = onAuthStateChanged(auth, (currentUser) => {
            // console.log("change state user", currentUser);
            setUser(currentUser);
            setIsLoading(false);
        });

        return () => {
            unSubscription;
        };
    }, []);

    const logOut = () => {
        return signOut(auth);
    };

    const authInfo = {
        registerUser,
        loginUser,
        setUser,
        googleSignIn,
        user,
        logOut,
        userProfileUpdate,
        isLoading,
    };
    // console.log(user);

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
