import { useContext, useEffect, useState } from "react"
import { Helmet } from "react-helmet-async";
import CommonBanner from "../../Components/Banner/CommonBanner";
import { axiosInstalled } from "../../Axios/Axios";
import CommonCards from "./CommonCards/CommonCards";
import ConformItem from "../../Components/ConformItem/ConformItem";
import { userStatusContext } from "../../AuthContext/AuthContext";


const OurShop = () => {
    // for conform card in dashbord
    const [conformCard, setConformCard] = useState(false);
    const [targetedID, setTargetedID] = useState(null);
    function handleCard(id) {
        setTargetedID(id)
        setConformCard(!conformCard)
    }
    const [data, setData] = useState(null);
    const [activeTab, setActiveTab] = useState(2);
    let obj = null;


    useEffect(() => {
        // set catagory data
        if (activeTab === 1) {
            obj = { category: "salad" };
        }
        else if (activeTab === 2) {
            obj = { category: "pizza" };
        }
        else if (activeTab === 3) {
            obj = { category: "soup" };
        }
        else if (activeTab === 4) {
            obj = { category: "dessert" };
        }
        else {
            obj = { category: "drinks" }
        }
        // call data
        axiosInstalled
            .post('/food_menu_filter', obj)
            .then(res => setData(res.data))
    }, [activeTab])

    // Handler to set the active tab
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };



    // if data is lodding
    if (!data) {
        return <div className="grid h-[100vh] bg-cover justify-center items-center">
            <Helmet>
                <title>RK Resturent ®️ || Shop</title>
            </Helmet>
            <span className="loading loading-spinner loading-lg"></span>
        </div>;
    }
    return (
        <>
            <Helmet>
                <title>RK Resturent ®️ || Shop</title>
            </Helmet>
            {conformCard && <ConformItem id={targetedID}></ConformItem>}
            <CommonBanner bgImg={'shop_banner'} p={'WOULD YOU LIKE TO TRY A DISH?'} header={'OUR SHOP'}>
            </CommonBanner>
            {/* Tab card section */}
            <section className="w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto">
                <div role="tablist" className="tabs tabs-bordered mt-20">
                    <a role="tab" onClick={() => handleTabClick(1)} className={`tab md:text-xl p-0 ${activeTab === 1 ? "tab-active text-[#BB8506]" : ""}`}
                    >Salad</a>
                    <a role="tab" onClick={() => handleTabClick(2)} className={`tab md:text-xl p-0 ${activeTab === 2 ? "tab-active text-[#BB8506]" : ""}`}
                    >Pizza</a>
                    <a role="tab" onClick={() => handleTabClick(3)} className={`tab md:text-xl p-0 ${activeTab === 3 ? "tab-active text-[#BB8506]" : ""}`}
                    >Soups</a>
                    <a role="tab" onClick={() => handleTabClick(4)} className={`tab md:text-xl p-0 ${activeTab === 4 ? "tab-active text-[#BB8506]" : ""}`}
                    >Desserts</a>
                    <a role="tab" onClick={() => handleTabClick(5)} className={`tab md:text-xl p-0 ${activeTab === 5 ? "tab-active text-[#BB8506]" : ""}`}
                    >Drinks</a>
                </div>
                <div>
                    <CommonCards handleCard={handleCard} cards={data}></CommonCards>
                </div>
            </section>
        </>
    )
}
export default OurShop






// {
//     data.map(each => <SwiperSlide ><img src={each.image} className="bg-cover bg-center bg-no-repeat w-[20vw] h-[90vh]" /></SwiperSlide >)
// }