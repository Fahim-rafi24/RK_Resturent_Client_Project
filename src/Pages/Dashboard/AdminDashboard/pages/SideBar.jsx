import { IoReorderThree } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";






const SideBar = () => {
    return (
        <div className="drawer lg:drawer-open z-30">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="text-3xl w-14 mt-5 ml-5 border p-3 rounded-xl bg-gray-400 drawer-button lg:hidden">
                    <IoReorderThree />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content space-y-5 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><Link to={'/admin/dashboard'}>Manage User</Link></li>
                    <li><Link to={''}>Manage Food Item</Link></li>
                    <li><Link to={''}>Add Food Item</Link></li>
                    <li><Link to={''}>Manage Table Booking</Link></li>
                    {/* sidebar back button */}
                    <label htmlFor="my-drawer-2">
                        <li><a className="lg:hidden border font-bold">Back <FaArrowRight /> </a></li>
                    </label>
                    {/* regular dashboard button */}
                    <label>
                        <li><Link to={'/dashboard'} className="font-bold"><FaArrowLeft /> Dashboard</Link></li>
                    </label>
                </ul>
            </div>
        </div>
    )
}
export default SideBar 