import { useContext } from "react"
import { userStatusContext } from "../../AuthContext/AuthContext"
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const currentUser = useContext(userStatusContext);

    if (!currentUser.user) {
        return <div className="h-[70vh] flex justify-center"><span className="loading loading-spinner loading-lg"></span></div>;
    }




    return (
        <>
            <Helmet>
                <title>RK Resturent ®️ || Card</title>
            </Helmet>
            <section className="border mt-14 md:mt-20 md:m-10 lg:m-32">
                fdsofw
            </section>
        </>
    )
}
export default Dashboard