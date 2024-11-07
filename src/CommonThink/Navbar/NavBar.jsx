import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { userStatusContext } from "../../AuthContext/AuthContext";
import { FaUserCircle } from "react-icons/fa";


export default function NavBar() {
    const { user, handleSignOut } = useContext(userStatusContext);

    const navIcon = <>
        <li className="md:mr-2 font-bold text-black"><NavLink to={'/'}>HOME</NavLink></li>
        <li className="md:mr-2 font-bold text-black"><NavLink to={'/contact_us'}>CONTACT US</NavLink></li>
        <li className="md:mr-2 font-bold text-black"><NavLink to={'/our_menu'}>OUR MENU</NavLink></li>
        <li className="md:mr-2 font-bold text-black"><NavLink to={'/our_shop'}>OUR SHOP</NavLink></li>
        {
            user ? <>
                <li className="md:mr-2 font-bold text-black"><NavLink to={'/dashboard'}>DASHBOARD</NavLink></li>
                <li className="md:mr-2 font-bold text-black"><div onClick={handleSignOut}>LOG OUT</div></li>
                {/* user avatar */}
                <div className="lg:hidden xl:block w-12 rounded-full">
                    {
                        user?.photoURL && <img src={user.photoURL} />
                    }
                </div>
                <div className="lg:hidden xl:block w-12 rounded-full">
                    {
                        !user?.photoURL && <FaUserCircle className="text-5xl" />
                    }
                </div>
                {/* user avatar End */}
            </>
                : <>
                    <li className="md:mr-2 font-bold text-black"><Link to={'/login'}>LOG IN</Link></li>
                </>
        }
    </>

    return (
        <div className="fixed z-10 w-full flex justify-between py-2 md:py-5 md:px-10 bg-[#ffffff1A]">
            <div className="navbar-start w-full md:w-fit">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navIcon}
                    </ul>
                </div>
                <Link to={'/'}
                    className="btn btn-ghost text-base font-bold text-purple-700 md:text-4xl cinzel">RK Resturent ®️</Link>
            </div>
            <div className="navbar-end hidden xl:flex">
                <ul className="menu menu-horizontal px-1">
                    {navIcon}
                </ul>
            </div>
        </div>
    )
}