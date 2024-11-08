import { Outlet } from "react-router-dom";
import Footer from "./CommonThink/Footer/Footer";
import NavBar from "./CommonThink/Navbar/NavBar";
import gsap from "gsap";


gsap.to('#root_Area', {
    scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
    x: 100
});




export default function Root() {
    return(
        <section id="root_Area" className="flex flex-col min-h-[100vh] inter">
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