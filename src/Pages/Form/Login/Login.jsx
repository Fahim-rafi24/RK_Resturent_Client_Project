import { Helmet } from "react-helmet-async";
import FormBody from "../FormBody";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Auth/firebase.config";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userStatusContext } from "../../../AuthContext/AuthContext";




export default function Login() {
    const [errorText, setError] = useState('');
    const navigate = useNavigate();
    const { redirectPath } = useContext(userStatusContext);

    const handleLoginSubmit = (e) => {
        setError('');
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password < 6) {
            return setError('Give Valid Password');
        }
        else {
            signInWithEmailAndPassword(auth, email, password)
                .then(res => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Log In Successfull",
                        showConfirmButton: false,
                        timer: 2500
                    });
                    {
                        redirectPath ? navigate(`${redirectPath}`) : navigate('/')
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setError('Somthing May Worng')
                })
        }
    }
    return (
        <>
            <Helmet>
                <title>RK Resturent ®️ || Login</title>
            </Helmet>
            <FormBody item_patan={'flex-row-reverse'} path={'login'}>
                {/* children Part */}
                <form
                    onSubmit={handleLoginSubmit}
                    className="w-[95%] md:w-[80%] text-2xl font-semibold p-5">
                    <h1 className="text-center text-4xl font-bold">Login</h1>
                    <label>
                        Email:
                        <input type="email" name="email" placeholder="Type Your Email"
                            className="block p-2 w-[95%] lg:w-[85%] text-base my-3" required />
                    </label>
                    {/* password field */}
                    <label>
                        Password:
                        <input type="password" name="password" placeholder="Type Your Password"
                            className="block p-2 w-[95%] lg:w-[85%] text-base my-3" />
                    </label>
                    <h1 className="border text-sm text-red-500">{errorText}</h1>
                    {/* password field End */}
                    <input type="submit" value="Log In" className="border w-[95%] lg:w-[85%] bg-gray-400 p-2 rounded-md hover:bg-gray-700 mt-5 hover:text-white" />
                </form>
                {/* children Part End */}
            </FormBody>
        </>
    )
}