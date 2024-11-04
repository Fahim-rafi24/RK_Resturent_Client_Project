import { Outlet } from "react-router-dom";
import Footer from "./CommonThink/Footer/Footer";
import NavBar from "./CommonThink/Navbar/NavBar";


export default function Root() {
    return(
        <section className="flex flex-col min-h-[100vh] inter">
        {/* nav */}
        <NavBar></NavBar>

        {/* common nasted root */}
        <section id="dynamic_body" className="flex-grow mb-10">
        <Outlet /> 
        </section>

        {/* footer */}
        <Footer></Footer>
        </section>
    )
}