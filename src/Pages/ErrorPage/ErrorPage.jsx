import { Link } from "react-router-dom"
import ErrorBg from "../../assets/error.svg"
import { CiLocationArrow1 } from "react-icons/ci";





export default function ErrorPage() {
    return (
        <Link
            to={'/'}
            className="h-[95vh] flex flex-col items-center justify-center">
            <button className="btn btn-outline">
                Go Home
                <CiLocationArrow1 className="text-2xl" />
            </button>
            <img src={ErrorBg} alt="Error Page" className="w-[40vw] h-[60vh]" />
        </Link>
    )
}