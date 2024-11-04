import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



export default function Footer() {
    return (
        <footer className="">
            {/* top */}
            <div className="md:flex">
                {/* left side */}
                <section className="md:w-[50%] text-center py-10 md:py-20 bg-[#1F2937] text-white">
                    <h3 className="text-2xl font-bold">CONTACT US</h3>
                    <div>
                        <p>Dhakyia Para, Vakutiys, Jashore, Khulna, Bangladesh</p>
                        <p>+88 01784918086</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </section>
                {/* right side */}
                <section className="md:w-[50%] text-center py-10 md:py-20 bg-[#111827] text-white">
                    <h3 className="text-2xl font-bold">Follow US</h3>
                    <small>Join us on social media</small>
                    <div className="flex justify-center mt-3 space-x-3"> 
                        <a href="https://www.facebook.com/"><FaFacebookF className="text-2xl mx-2"/></a>
                        <a href="https://www.instagram.com/"><FaInstagram className="text-2xl mx-2"/></a>
                        <a href="https://x.com/"><FaTwitter className="text-2xl mx-2"/></a>
                    </div>
                </section>
            </div>
            {/* bottom Copyright reserved  */}
            <aside className="bg-black text-white text-center py-4">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    )
}
// https://www.facebook.com/
// https://www.instagram.com/
// https://x.com/