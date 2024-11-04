import RoyelDivBar from "../../CommonThink/RoyelDivBar/RoyelDivBar";
import HomeBanner from "../../Components/Banner/HomeBanner";



export default function Home() {
    return (
        <>
            <HomeBanner></HomeBanner>
            {/* 1st title */}
            <RoyelDivBar
                p={'---From 11:00am to 10:00pm---'}
                header={'ORDER ONLINE'}
                border={''}>
            </RoyelDivBar>
        </>
    )
}