import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import img
import slide1 from "../../assets/HomeBanner/slide1.jpg"
import slide2 from "../../assets/HomeBanner/slide2.jpg"
import slide3 from "../../assets/HomeBanner/slide3.jpg"
import slide4 from "../../assets/HomeBanner/slide4.jpg"
import slide5 from "../../assets/HomeBanner/slide5.jpg"



export default function HomeSwiper() {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper max-w-[1100px] mx-auto px-5 my-20">

            {/* all img */}

            <SwiperSlide>
                <img src={slide1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide5} alt="" />
            </SwiperSlide>
        </Swiper>
    )
}