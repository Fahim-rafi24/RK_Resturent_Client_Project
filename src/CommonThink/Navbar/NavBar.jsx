import { Link, NavLink } from "react-router-dom";



export default function NavBar() {

    const navIcon = <>
        <li className="p-2 md:p-0 md:mr-2"><NavLink to={'/'}>HOME</NavLink></li>
        <li className="p-2 md:p-0 md:mr-2"><NavLink to={'/contact_us'}>CONTACT US</NavLink></li>
        <li className="p-2 md:p-0 md:mr-2"><NavLink to={'/our_menu'}>OUR MENU</NavLink></li>
        <li className="p-2 md:p-0 md:mr-2"><NavLink to={'/our_shop'}>OUR SHOP</NavLink></li>
    </>


    return (
        <div className="flex justify-between py-2 md:py-5 md:px-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                    className="btn btn-ghost text-xl">RK Resturent®️</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navIcon}
                </ul>
            </div>
        </div>
    )
}