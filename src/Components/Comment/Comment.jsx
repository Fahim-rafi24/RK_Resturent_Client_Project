// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react"
import { axiosInstalled } from "../../Axios/Axios"
import RoyelDivBar from "../../CommonThink/RoyelTitleBar/RoyelDivBar";



export default function Comment() {
    const [commenst, setComments] = useState([]);
    useEffect(() => {
        // axios call
        axiosInstalled
            .get('/comments', {}) // when Read any data then don't send any body element;
            .then(res => setComments(res.data))
    }, [])
    return (
        <>
            {/* title */}
            <RoyelDivBar
                p={'---What Our Clients Say---'}
                header={'TESTIMONIALS'}
                border={''}></RoyelDivBar>
            {/* main Comment Body */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[95%] md:w-[80%] lg:w-[65%] text-center">
                {
                    commenst.map(each => {
                        return <SwiperSlide key={each._id}>
                            <div className='flex flex-col h-80 md:h-48'>
                                <p className='flex-grow raleway'>{each.details}</p>
                                <h2 className='text-2xl font-bold text-[#CD9003] mt-5 cinzel'>{each.name}</h2>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    )
}