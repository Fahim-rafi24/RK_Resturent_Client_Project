import RoyelDivBar from "../../CommonThink/RoyelTitleBar/RoyelDivBar";
import TitleBar from "../../CommonThink/TitleBar/TitleBar";
// img
import featuredImg from "../../assets/HomeBanner/featured.jpg"



export default function HomeBottomBanner(){
    return(
        <section className="home_bottom_banner grid">
            <div className="mt-10">
            <RoyelDivBar
                p={'---Check it out---'}
                header={'FROM OUR MENU'}
                border={'border-white'}>
            </RoyelDivBar>
            </div>
            <div className="lg:flex justify-around mb-20">
                <img src={featuredImg} className="w-[90%] md:w-[60%] mx-auto lg:w-[30%]"/>
                <section className="mt-5 lg:mt-0 text-center lg:text-start lg:w-[35%] text-black">
                    <h6 className="font-bold text-3xl">March 20, 2023</h6>
                    <h3 className="mt-5 font-semibold text-xl">WHERE CAN I GET SOME?</h3>
                    <p className="text-white text-xl font-bold my-5 mb-20">Garden salad roll with grilled chicken, served with spicy peanut dip</p>
                    <TitleBar p={'Read More'}></TitleBar>
                </section>
            </div>
        </section>
    )
}