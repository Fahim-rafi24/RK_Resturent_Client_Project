import { Link } from "react-router-dom"
import ErrorBg from "../../assets/error.svg" 

export default function ErrorPage(){
    return(
        <Link
        to={'/'}
        className="h-[95vh] flex items-center justify-center">
        <img src={ErrorBg} alt="Error Page" className="w-[40vw] h-[60vh]"/>
        {/* <button></button> */}
        </Link>
    )
}