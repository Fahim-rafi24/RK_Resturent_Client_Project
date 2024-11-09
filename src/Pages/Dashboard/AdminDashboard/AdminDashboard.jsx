import { useContext, useEffect, useState } from "react"
import { userStatusContext } from "../../../AuthContext/AuthContext"
import { Outlet, useNavigate } from "react-router-dom";
import { axiosInstalled } from "../../../Axios/Axios";
import SideBar from "./pages/SideBar";




const AdminDashBoard = () => {
    const { user } = useContext(userStatusContext);
    // const navigation = useNavigate();
    const [admin, setAdmin] = useState(null);
    const [currrentUser, setCurrentUser] = useState(null);

    // check effect
    useEffect(() => {
        if (user) {
            axiosInstalled.post(`/users/email?email=${user}`, {})
                .then(res => {
                    if (res.data[1].role) {
                        setAdmin(res.data[1].role)
                        setCurrentUser(res.data[1].name)
                    }
                })
        }
    }, [user])



    if (admin) {
        return (
            <section className="w-full md:flex">
                <div className="lg:w-80 top-0 absolute">
                    <SideBar></SideBar>
                </div>
                <div className="lg:ml-80 w-full mt-32 md:mt-10">
                    {
                        currrentUser && <h1 className="text-center text-2xl mt-5 font-bold">{currrentUser}</h1>
                    }
                    <Outlet />
                </div>
            </section>
        )
    }
    else {
        return (
            <>
                <section className="h-[100vh] flex justify-center items-center text-6xl text-red-500 italic cinzel">
                    <span className="loading loading-dots loading-lg"></span>
                </section>
            </>
        )
    }
}
export default AdminDashBoard