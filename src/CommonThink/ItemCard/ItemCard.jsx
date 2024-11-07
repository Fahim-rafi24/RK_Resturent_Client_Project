// import { Link, NavLink } from "react-router-dom"

import { useContext } from "react"
import { userStatusContext } from "../../AuthContext/AuthContext"


const ItemCard = ({ card, state }) => {
    const currentUser = useContext(userStatusContext);


    return (
        <div className="card bg-base-100 border shadow-xl my-7 md:my-0">
            <figure className="p-2 lg:p-4">
                <img
                    src={card.image}
                    alt={card.name}
                    className="rounded-lg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title cinzel">{card.name}</h2>
                <h2 className="raleway capitalize">{card.category}</h2>
                <p className="text-sm">{card.recipe}</p>
                <div className="card-actions justify-between items-center mt-5">
                    <span className="text-purple-500 font-semibold raleway">$ {card.price}</span>
                    {
                        currentUser.user && <button onClick={()=>state(card._id)} className="btn text-[#BB8506] hover:bg-gray-800">Add To cards</button>
                    }
                    {
                      !currentUser.user && <button onClick={()=>state(card._id)} className="btn text-[#BB8506] hover:bg-gray-800" disabled>Log In First</button>
                    }
                </div>
            </div>
        </div>
    )
}
export default ItemCard