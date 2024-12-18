// react icon
import { FaArrowRight } from "react-icons/fa";
import RoyelDivBar from "../../CommonThink/RoyelTitleBar/RoyelDivBar";
import HomeBanner from "../../Components/Banner/HomeBanner";
import HomeSwiper from "../../Components/Swiper/HomeSwiper";
import TitleBar from "../../CommonThink/TitleBar/TitleBar";
import HomeBottomBanner from "../../Components/Banner/HomeBottomBanner";
import { useEffect, useState } from "react";
import { axiosInstalled } from "../../Axios/Axios";
import FoodList from "../../Components/FoodList/FoodList";
import Comment from "../../Components/Comment/Comment";
import { Helmet } from "react-helmet-async";
import ItemCard from "../../CommonThink/ItemCard/ItemCard";
import ConformItem from "../../Components/ConformItem/ConformItem";



export default function Home() {
    const [popular, setPopular] = useState([]);
    const [recommends, setRecommends] = useState([]);

    // for conform card in dashbord
    const [conformCard, setConformCard] = useState(false);
    const [targetedID, setTargetedID] = useState(null);
    function handleCard (id){
        setTargetedID(id)
        setConformCard(!conformCard)
    }

    useEffect(() => {
        // axios call
        axiosInstalled
            .post('/food_menu/7', { category: 'popular' })
            .then(res => setPopular(res.data))
        // axios call
        axiosInstalled
            .post('/food_menu/7', { category: 'offered' })
            .then(res => setRecommends(res.data))
    }, [])


    return (
        <>
            <Helmet>
                <title>RK Resturent ®️ || Home</title>
            </Helmet>
            {/* banner */}
            <HomeBanner></HomeBanner>

            {/* 1st title */}
            <RoyelDivBar
                p={'---From 11:00am to 10:00pm---'}
                header={'ORDER ONLINE'}
                border={''}>
            </RoyelDivBar>

            {/* Food Swiper */}
            <div className="flex items-center max-w-[1100px] mx-auto px-5 my-20">
                <HomeSwiper></HomeSwiper>
                <FaArrowRight className="text-3xl lg:text-5xl text-green-500" />
            </div>

            {/* info Div */}
            <section className="max-w-[1200px] max-h-[572px] md:p-20 mx-2 md:mx-auto shef_hand">
                <div className="text-black text-center bg-white md:p-14">
                    <h2 className="text-3xl font-bold cinzel">Our Food</h2>
                    <p className="raleway">Make your way to our Sushi and Kobe beef counter where our finest Master Chefs offer a special Omakase course that gives you the best Japanese culinary masterpiece in Bangladesh & also all type of FastFood.The restaurant offers premium seafood coming from the Japanese biggest fish market, Toyosu Market(previously known as Tsukiji Market) and “A5 Kobe beef” (Beef marbling score 12), which is the highest grade wagyu brand in the world.</p>
                </div>
            </section>

            {/* 2th title */}
            <RoyelDivBar
                p={'---Check it out---'}
                header={'OUR POPULAR MENU'}
                border={''}>
            </RoyelDivBar>

            {/* Popular UseState use */}
            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1100px] px-5 mx-auto">
                {
                    popular.map(each => <FoodList key={each._id} each={each}></FoodList>)
                }
            </div>

            {/* small title */}
            <div className="flex justify-center">
                <TitleBar p={'View Full  Menu'} link={'/our_menu'}></TitleBar>
            </div>

            {/* call Us Div */}
            <div
                className="flex justify-center items-center my-20 max-w-[1100px] mx-auto bg-black h-40 text-white text-3xl"
            >Call ME : +8801784918086</div>

            {/* 3th title */}
            <RoyelDivBar
                p={'---Should Try---'}
                header={'CHEF RECOMMENDS'}
                border={''}>
            </RoyelDivBar>

            {/* offered Item */}
            <div className="p-5 w-full lg:w-[80%] grid md:grid-cols-2 xl:grid-cols-3 py-10 gap-7 mx-auto">
            {
                recommends.map(each => <ItemCard key={each._id} card={each} state={handleCard}></ItemCard>)
            }
            </div>
                {conformCard && <ConformItem id={targetedID}></ConformItem>}


            {/* BOttom Banner */}
            <HomeBottomBanner></HomeBottomBanner>

            {/* Comment Area  */}
            <Comment></Comment>
        </>
    )
}