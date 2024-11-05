import { Helmet } from "react-helmet-async";
import FormBody from "../FormBody";




export default function Register() {
    const handleSignInSubmit = (e) => {
        e.preventDefault();
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
                {/* password field End */}
                <input type="submit" value="Sign In" className="border w-[95%] lg:w-[85%] bg-gray-400 p-2 rounded-md hover:bg-gray-700 mt-5 hover:text-white mb-10" />
            </form>
            {/* children Part End */}
        </FormBody>
        </>
    )
}