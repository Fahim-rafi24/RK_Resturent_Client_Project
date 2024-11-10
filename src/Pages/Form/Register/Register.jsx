import { Helmet } from "react-helmet-async";
import FormBody from "../FormBody";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { userStatusContext } from "../../../AuthContext/AuthContext";
import { axiosInstalled } from "../../../Axios/Axios";
import Swal from "sweetalert2";


export default function Register() {
    const [errorText, setError] = useState('');
    const { handleSignInUser, redirectPath } = useContext(userStatusContext);
    const navigate = useNavigate();

    // form submit
    const handleSignInSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (e) {
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            if (name === '') {
                return setError('Please Provide Your Name');
            }
            else if (password < 6) {
                return setError('Please Provide Your Password');
            }
            else {
                // post data for sending Email
                handleSignInUser(email, password)
                    .then((result) => {
                        if (result.operationType === 'signIn') {
                            // post data with axios call
                            axiosInstalled
                                .post('/user', { name, email })
                                .then(res => {
                                    if (res.data.status === "successfull") {
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
                                    }
                                })
                        }
                    })
                form.reset();
            }
        }
        else {
            setError('Sign In Again');
        }
    }
    return (
        <>
            <Helmet>
                <title>RK Resturent ®️ || Sign Up</title>
            </Helmet>
            <FormBody item_patan={''} path={'register'}>
                {/* children Part */}
                <form
                    onSubmit={handleSignInSubmit}
                    className="w-[95%] md:w-[80%] text-2xl font-semibold p-5">
                    <h1 className="text-center text-4xl font-bold">Register</h1>
                    <label>
                        Name:
                        <input type="name" name="name" placeholder="Type Your Name"
                            className="block p-2 w-[95%] lg:w-[85%] text-base my-3" />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" placeholder="Type Your Email"
                            className="block p-2 w-[95%] lg:w-[85%] text-base my-3" />
                    </label>
                    {/* password field */}
                    <label>
                        Password:
                        <input type="password" name="password" placeholder="Type Your Password"
                            className="block p-2 w-[95%] lg:w-[85%] text-base my-3" />
                    </label>
                    <h1 className="text-sm text-red-600 my-5">{errorText}</h1>
                    {/* password field End */}
                    <input type="submit" value="Sign In" className="border w-[95%] lg:w-[85%] bg-gray-400 p-2 rounded-md hover:bg-gray-700 mt-5 hover:text-white mb-10" />
                </form>
                {/* children Part End */}
            </FormBody>
        </>
    )
}