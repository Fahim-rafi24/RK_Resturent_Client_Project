import FormBody from "../FormBody";




export default function Login() {
    const handleLoginSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <FormBody item_patan={'flex-row-reverse'} path={'login'}>
            {/* children Part */}
            <form
                onSubmit={handleLoginSubmit}
                className="w-[95%] md:w-[80%] text-2xl font-semibold p-5">
                <h1 className="text-center text-4xl font-bold">Login</h1>
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
                <input type="submit" value="Log In" className="border w-[95%] lg:w-[85%] bg-gray-400 p-2 rounded-md hover:bg-gray-700 mt-5 hover:text-white" />
            </form>
            {/* children Part End */}
        </FormBody>
    )
}