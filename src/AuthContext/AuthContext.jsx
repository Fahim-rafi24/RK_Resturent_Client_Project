import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Auth/firebase.config";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
import { axiosInstalled } from "../Axios/Axios";



export const userStatusContext = createContext(null);


const AuthContext = ({ children }) => {
    // useState
    const [user, setUser] = useState(null);  // Log in user
    const [isLoading, setIsLoading] = useState(false);
    // jwt Token status
    const [jwtToken, setJwtToken] = useState(null); // TODO : item for future


    // remove token from cookies
    const removedJwtTokenFunc = () => {
        axiosInstalled.post('/logoutJwt', {})
            .then(res => {
                console.log(res.data)
                // 
            })
    }

    // useEffect
    useEffect(() => {   // call for current user
        onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser?.email) {
                // axios call
                axiosInstalled
                    .post('/create_jwt', { email: currentUser.email })
                    .then(res => {
                        setJwtToken(res.data)
                    })
                    .catch(err => {
                        if (err.response.status === 401 || 404) {
                            navigate('/login');
                            removedJwtTokenFunc();
                        }
                    })
            }
            setUser(currentUser?.email);
        })
    }, [user])




    const handleSignInUser = async (email, password) => {  // call for Register user
        return await createUserWithEmailAndPassword(auth, email, password);
    }
    const handleSignOut = async () => {
        signOut(auth)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign Out Successfull.",
                    showConfirmButton: false,
                    timer: 2500
                });
                removedJwtTokenFunc();
            })
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGooglelogIn = async () => {
        return signInWithPopup(auth, googleProvider);
    }

    // store RedirectPath in state
    const [redirectPath, setRedirectPath] = useState(null);
    const result = {
        user,
        handleSignInUser,
        handleGooglelogIn,
        handleSignOut,
        isLoading,
        setIsLoading,
        redirectPath,
        setRedirectPath,
        removedJwtTokenFunc,
    };
    return (
        <userStatusContext.Provider value={result}>
            {children}
        </userStatusContext.Provider>
    )
};
export default AuthContext;