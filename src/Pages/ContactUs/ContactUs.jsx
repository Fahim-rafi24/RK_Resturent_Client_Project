import { Helmet } from "react-helmet-async";
import CommonBanner from "../../Components/Banner/CommonBanner";
import RoyelDivBar from "../../CommonThink/RoyelTitleBar/RoyelDivBar";
// 
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
// 
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from "react";
import { axiosInstalled } from "../../Axios/Axios";
import Swal from "sweetalert2";



export default function ContactUs() {
    const [disabled, setDiseable] = useState(true);
    const [errorText, setError] = useState('');

    // recaptcha function
    const handleRecaptcha = (value) => {
        if (value) {
            setDiseable(false);
            setError('')
        }
        else {
            setError('Google Recaptcha Is False');
        }
    };

    // form submit function
    const handleFormSubmit = (e) => {
        setError('')
        e.preventDefault();
        if (e) {
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const phone = form.phone.value;
            const message = form.message.value;
            if (name === '') {
                return setError('Please Provide Your Name');
            }
            else if (email === '') {
                return setError('Please Provide Your Email');
            }
            else if (phone < 10) {
                return setError('Please Provide Your Phone');
            }
            else if (message < 16) {
                return setError('Please Provide Your Message For Us.....');
            }
            else {
                const contactData = { name, email, phone, message };
                // post data in Api
                axiosInstalled
                    .post('/contactUser', contactData)
                    .then(res => {
                        if(res.data.status){
                            Swal.fire("Send Form Successfully");
                            setDiseable(true)
                            form.reset();
                        }
                    })
            }
        } else {
            setError('Google Recaptcha Is False');
        }
    };


    return (
        <>
            <Helmet>
                <title>RK Resturent ®️ || Contact</title>
            </Helmet>
            {/* top banner */}
            <CommonBanner bgImg={'contact_us'} header={"CONTACT US"} p={"WOULD YOU LIKE TO TRY A DISH?"}></CommonBanner>
            {/* royel div title */}
            <RoyelDivBar p='---Visit Us---' header='OUR LOCATION'></RoyelDivBar>
            {/* contact info */}
            <section>
                <div className="w-[95%] md:w-3/6 lg:w-3/6 mx-auto grid grid-cols-1 xl:grid-cols-3 gap-7">
                    <section>
                        <div className="border w-full h-[40%] bg-[#D1A054] flex justify-center py-10">
                            <FaPhone className="text-2xl" />
                        </div>
                        <div className="border w-full h-[60%] bg-gray-300 text-center">
                            <h2 className="text-3xl font-extrabold mt-5">PHONE</h2>
                            <p className="text-base text-black mt-2">+8801784918086</p>
                        </div>
                    </section>
                    <section>
                        <div className="border w-full h-[40%] bg-[#D1A054] flex justify-center py-10">
                            <FaLocationDot className="text-2xl" />
                        </div>
                        <div className="border w-full h-[60%] bg-gray-300 text-center">
                            <h2 className="text-3xl font-extrabold mt-5">LOCATION</h2>
                            <p className="text-base text-black mt-2">Dhakyia Para, Vakutiys, Jashore, Khulna, Bangladesh</p>
                        </div>
                    </section>
                    <section>
                        <div className="border w-full h-[40%] bg-[#D1A054] flex justify-center py-10">
                            <FaClock className="text-2xl" />
                        </div>
                        <div className="border w-full h-[60%] bg-gray-300 text-center">
                            <h2 className="text-3xl font-extrabold mt-5">WORKING TIME</h2>
                            <p className="text-base text-black mt-2">Mon - Fri: 08:00 - 22:00</p>
                            <p className="text-base text-black">Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </section>
                </div>
            </section>
            {/* royel div title */}
            <RoyelDivBar p='---Send Us a Message---' header='CONTACT FORM'></RoyelDivBar>

            {/* contact form  field */}
            <div className="bg-gray-300 max-w-[1200px] mx-auto md:p-20 rounded-lg mb-72">
                <form
                    onSubmit={handleFormSubmit}
                    className="md:grid md:grid-cols-2 gap-5  px-10 mx-auto text-xl p-10 rounded-lg bg-gray-300 md:bg-white">
                    <label>
                        Name :
                        <input type="text" name="name" placeholder="Enter Your Name" className="border block w-full py-2 px-5 rounded-md my-3" />
                    </label>
                    <label>
                        Email :
                        <input type="email" name="email" placeholder="Enter Your Email" className="border block w-full py-2 px-5 rounded-md my-3" />
                    </label>
                    <label className="col-span-2">
                        Phone :
                        <input type="text" name="phone" placeholder="Enter Your phone" className="border block w-full py-2 px-5 rounded-md my-3" />
                    </label>
                    <label className="col-span-2">
                        Message:
                        <textarea name="message" placeholder="Type Your Name" className="border p-5 block w-full h-72 rounded-lg my-3"></textarea>
                    </label>
                    {/* show error */}
                    <h2 className="col-span-2 italic text-red-500 text-sm text-center">{errorText}</h2>
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your site key
                        onChange={handleRecaptcha}
                    />
                    <div className="text-center col-span-2">
                        {
                            disabled ?
                                <>
                                    <button disabled className="border p-3 rounded-2xl text-black bg-gray-300">button disabled</button>
                                </>
                                :
                                <button name="submit" disabled={disabled}
                                    className="rounded-md hover:border-black hover:border-b-8 p-4 w-fit bg-gradient-to-l from-[#835D23] to-[#B58130]">
                                    SEND MESSAGE <FaPaperPlane className="relative inline-block bottom-1" />
                                </button>
                        }
                    </div>
                </form>
            </div>
        </>
    )
}