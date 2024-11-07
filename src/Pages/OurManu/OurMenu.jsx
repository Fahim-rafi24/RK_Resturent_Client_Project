import { useEffect, useState } from "react";
import { axiosInstalled } from "../../Axios/Axios";
import RoyelDivBar from "../../CommonThink/RoyelTitleBar/RoyelDivBar";
import CommonBanner from "../../Components/Banner/CommonBanner";
import FoodList from "../../Components/FoodList/FoodList";
import { ShefHand } from "../../CommonThink/ShefHand/ShefHands";
import TitleBar from "../../CommonThink/TitleBar/TitleBar";
import { Helmet } from "react-helmet-async";
// 



export default function OurMenu() {
    const [desserts, setDesserts] = useState([]);
    const [pizzas, setPizzas] = useState([]);
    const [salads, setSalads] = useState([]);
    const [soups, setSoups] = useState([]);

    useEffect(() => {
        // axios call for DESSERTS
        axiosInstalled
            .post('/food_menu/20', { category: 'dessert' })
            .then(res => setDesserts(res.data));

        // axios call for PIZZAS
        axiosInstalled
            .post('/food_menu/20', { category: 'pizza' })
            .then(res => setPizzas(res.data));

        // axios call for SALADS
        axiosInstalled
            .post('/food_menu/20', { category: 'salad' })
            .then(res => setSalads(res.data));

        // axios call for SOUPS
        axiosInstalled
            .post('/food_menu/20', { category: 'soup' })
            .then(res => setSoups(res.data));
    }, [])


    return (
        <>
            <Helmet>
                <title>RK Resturent ®️ || Menu</title>
            </Helmet>
            {/* menu banner section */}
            <CommonBanner
                bgImg={'menu_Banner'}
                header={'OUR MENU'}
                p={'WOULD YOU LIKE TO TRY A DISH?'}></CommonBanner>

            {/* 1st title */}
            <RoyelDivBar
                p={"---Don't miss---"}
                header={"TODAY'S OFFER"}>

            </RoyelDivBar>

            {/* small title */}
            <div className="flex justify-center">
                <TitleBar p={'CONNECT WITH US'} link={'/contact_us'}></TitleBar>
            </div>

            {/* info div shef hand */}
            <ShefHand
                h={'DESSERTS'}
                p={'From easy chocolate self-saucing pudding to kid-friendly jelly slice, these are the top 50 best dessert available for you.'} img={'cover1'}></ShefHand>

            {/* api data */}
            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1100px] px-5 mx-auto">
                {
                    desserts.map(each => <FoodList key={each._id} each={each}></FoodList>)
                }
            </div>

            {/* small title */}
            <div className="flex justify-center">
                <TitleBar p={'ORDER YOUR FAVOURITE FOOD'} link={'/our_shop'}></TitleBar>
            </div>

            {/* info div shef hand */}
            <ShefHand
                h={'PIZZA'}
                p={'While Italy is the home of pizza, countries across the globe have followed suit . So we also try to provide the Best pizza moment for you.'} img={'cover2'}></ShefHand>

            {/* api data */}
            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1100px] px-5 mx-auto">
                {
                    pizzas.map(each => <FoodList key={each._id} each={each}></FoodList>)
                }
            </div>

            {/* small title */}
            <div className="flex justify-center">
                <TitleBar p={'ORDER YOUR FAVOURITE FOOD'} link={'/our_shop'}></TitleBar>
            </div>

            {/* info div shef hand */}
            <ShefHand
                h={'SALADS'}
                p={"Meals like… salads! We've put together all best salad for you."} img={'cover3'}></ShefHand>

            {/* api data */}
            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1100px] px-5 mx-auto">
                {
                    salads.map(each => <FoodList key={each._id} each={each}></FoodList>)
                }
            </div>

            {/* small title */}
            <div className="flex justify-center">
                <TitleBar p={'ORDER YOUR FAVOURITE FOOD'} link={'/our_shop'}></TitleBar>
            </div>

            {/* info div shef hand */}
            <ShefHand
                h={'SOUPS'}
                p={"Hay, Soup Lover. We came make the best Deal for You."} img={'cover4'}></ShefHand>

            {/* api data */}
            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1100px] px-5 mx-auto">
                {
                    soups.map(each => <FoodList key={each._id} each={each}></FoodList>)
                }
            </div>

            {/* small title */}
            <div className="flex justify-center">
                <TitleBar p={'ORDER YOUR FAVOURITE FOOD'} link={'/our_shop'}></TitleBar>
            </div>
        </>
    )
}