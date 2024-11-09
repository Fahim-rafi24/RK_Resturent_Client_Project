import { useContext, useEffect, useState } from "react"
import { axiosInstalled } from "../../../../Axios/Axios"
import { userStatusContext } from "../../../../AuthContext/AuthContext"
import Swal from "sweetalert2";



const Users = () => {
    const { user } = useContext(userStatusContext);
    const [totalUser, setTotalUser] = useState(null);

    useEffect(() => {
        if (user) {
            axiosInstalled.post('/users', { email: user })
                .then(res => setTotalUser(res.data));
        }
    }, [user])


    const handleAddAdmin = (id) => {
        axiosInstalled.post(`/add_admin/${id}`, { email: user })
            .then(res => {
                console.log(res.data.user);
                if (res.data.user === "updated") {
                    // refetch all user
                        axiosInstalled.post('/users', { email: user })
                            .then(res => setTotalUser(res.data));
                    Swal.fire({
                        title: "Admin Addeded.",
                        showClass: {
                            popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                        },
                        hideClass: {
                            popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                        }
                    });
                }
            })
    }

    return (
        <div className="overflow-x-auto mt-10 border">
            <table className="table table-zebra text-center">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-start">No.</th>
                        <th className="border-l">Name</th>
                        <th className="border-l">Type</th>
                        <th className="border-l hidden lg:block">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row  */}
                    {
                        totalUser && totalUser.map((user, inx) => <tr key={inx}>
                            <td className='text-start'>{inx + 1}</td>
                            <td className="border-l">{user.name}</td>
                            <td
                                onClick={() => handleAddAdmin(user._id)}
                                className={`border-l ${!user.role ? "hover:text-blue-400" : 'text-purple-600 font-bold'}`}>{user.role ? user.role : 'customer'}</td>
                            <td className="border-l hidden lg:block">{user.email}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Users