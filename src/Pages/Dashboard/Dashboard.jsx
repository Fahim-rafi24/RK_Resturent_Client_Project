import { useContext, useEffect, useState } from "react"
import { userStatusContext } from "../../AuthContext/AuthContext"
import { Helmet } from "react-helmet-async";
import { axiosInstalled } from "../../Axios/Axios";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [userCard, setUserCard] = useState(null);

    const { user, removedJwtTokenFunc } = useContext(userStatusContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            axiosInstalled.post(`/users/email?email=${user}`, {})
                .then(res => {
                    setUserData(res.data[1])  // user data
                    setUserCard(res.data[2])  // user card data
                })
                .catch(err => {
                    if (err.response.status === 401 || 404) {
                        navigate('/login');
                        removedJwtTokenFunc();
                    }
                })
        }
    }, [user])
    if (!userData) {
        return <div className="h-[70vh] flex justify-center"><span className="loading loading-spinner loading-lg"></span></div>;
    }
    return (
        <>
            <Helmet>
                <title>RK Resturent ®️ || Dashboard</title>
            </Helmet>
            <section className="mt-14 md:mt-20 md:m-10 lg:m-32 p-1">
                {
                    userData && <>
                        {
                            userData?.role && <Link to={'/admin/dashboard'}><button className="btn bg-red-400 text-black">Admin Dashboard</button></Link>
                        }
                        <h1 className="text-black text-4xl text-end">{userData.name}</h1>
                        <h3 className="text-green-400 font-bold my-5 text-end">{userData.email}</h3>
                        {/* card display section */}
                        <section className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-20 mt-10">
                            {
                                userCard.map((each, inx) => <div key={inx}>
                                    <div className="card image-full p-10 border w-[95%] md:w-[60%] xl:w-full mx-auto shadow-xl">
                                        <figure>
                                            <img
                                                src={each.image}
                                                alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title cinzel">{each.name}</h2>
                                            <p className={`mt-10 text-green-600 font-semibold`}>order is Pending</p>
                                            <div className="card-actions text-end mr-5">
                                                <p>price : ${each.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </section>
                    </>
                }
            </section>
        </>
    )
}
export default Dashboard