import { Link } from "react-router-dom";




export default function TitleBar({ p, link }) {
    return (
        <Link to={link}
        className="flex justify-center hover:text-purple-400 w-fit my-10">
            <p className="border-b-4 border-black text-center pb-2 rounded-b-xl px-2 font-bold">{p}</p>
        </Link>
    )
}