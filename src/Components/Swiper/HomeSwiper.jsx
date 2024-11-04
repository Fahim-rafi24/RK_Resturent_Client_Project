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
                className="mySwiper cinzel">

                {/* all img */}

                <SwiperSlide>
                    <img src={slide1} />
                    <p className='ml-4 text-yellow-400 font-bold text-xl md:text-2xl lg:text-4xl relative bottom-10 lg:bottom-16'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} />
                    <p className='ml-4 text-yellow-400 font-bold text-xl md:text-2xl lg:text-4xl relative bottom-10 lg:bottom-16'>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} />
                    <p className='ml-4 text-yellow-400 font-bold text-xl md:text-2xl lg:text-4xl relative bottom-10 lg:bottom-16'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} />
                    <p className='ml-4 text-yellow-400 font-bold text-xl md:text-2xl lg:text-4xl relative bottom-10 lg:bottom-16'>Cakes</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} />
                    <p className='ml-4 text-yellow-400 font-bold text-xl md:text-2xl lg:text-4xl relative bottom-10 lg:bottom-16'>Salad</p>
                </SwiperSlide>
            </Swiper>
    )
}