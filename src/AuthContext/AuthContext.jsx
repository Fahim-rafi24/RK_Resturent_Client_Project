import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Auth/firebase.config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



export const userStatusContext = createContext(null);


const AuthContext = ({ children }) => {
    // useState
    const [user, setUser] = useState(null);  // Log in user
    const [isLoading, setIsLoading] = useState(false);

    // useEffect
    useEffect(() => {     // call for current user
        onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser?.email);
        })
    }, [])

    const handleSignInUser = async (email, password) => {  // call for Register user
        return await createUserWithEmailAndPassword(auth, email, password);
    }
    const handleSignOut = async () => {
        signOut(auth)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign Out Successfull",
                    showConfirmButton: false,
                    timer: 2500
                });
            })
    }


    // store RedirectPath in state
    const [redirectPath, setRedirectPath]= useState(null);
    const result = {
        user,
        handleSignInUser,
        handleSignOut,
        isLoading,
        setIsLoading,
        redirectPath,
        setRedirectPath,
    };
    return (
        <userStatusContext.Provider value={result}>
            {children}
        </userStatusContext.Provider>
    )
};
export default AuthContext;