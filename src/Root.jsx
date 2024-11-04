import NavBar from "./CommonThink/Navbar/NavBar";


export default function Root() {
    return(
        <section className="inter">
        {/* nav */}
        <NavBar></NavBar>

        {/* common nasted root */}
        <div className='flex justify-center text-4xl items-center w-full h-[100vh]'>Welcome Here...</div>   

        {/* footer */}
        
        </section>
    )
}