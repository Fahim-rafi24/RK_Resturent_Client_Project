import { Link } from "react-router-dom"
import authenticationImg from "../../assets/authentication.png"
// react icon
// import { FaFacebookF } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import { IoHome } from "react-icons/io5";


export default function FormBody({ item_patan, children, path }) {
    let p = '';
    let link = '';
    let go = '';
    if (path === 'login') {
        p = "New here?"
        link = '/register'
        go = 'Create a New Account'
    }
    else {
        p = "Already registered?"
        link = '/login'
        go = 'Go to log in'
    }

    return (
        <section className="min-h-[100vh] formBg p-5 md:p-20">
            <div className={`border shadow-2xl min-h-[85vh] lg:flex ${item_patan}`}>
                <div className="w-full lg:w-[50%] flex flex-col justify-center items-center mt-16 md:mt-0">
                    {children}
                    <p className="text-[#D1A054] w-[95%] md:w-[80%] pl-5">{p}<span> </span>
                        <Link to={link} className="font-bold">{go}</Link>
                    </p>
                    {/* <span className="w-[95%] md:w-[80%] pl-5 font-bold mt-2">Or sign up with</span> */}
                    <div className="flex text-5xl space-x-5 w-[95%] md:w-[80%] pl-16 mt-5">
                        {/* <FaFacebookF className="p-2 rounded-full border-2" /> */}
                        {/* <button><FaGoogle onClick={callGoogle} className="p-2 rounded-full border-2" /></button> */}
                        {/* <FaGithub className="p-2 rounded-full border-2" /> */}
                        <Link to={'/'}><IoHome className="p-2 rounded-full border-2" /></Link>
                    </div>
                </div>
                {/* img section */}
                <div className="w-full lg:w-[50%] flex justify-center items-center">
                    <img src={authenticationImg} className="w-fit h-fit" />
                </div>
            </div>
        </section>
    )
}