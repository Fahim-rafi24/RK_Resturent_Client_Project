import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import local img
import img1 from "../../assets/HomeBanner/01.jpg";
import img2 from "../../assets/HomeBanner/02.jpg";
import img3 from "../../assets/HomeBanner/03.png";
import img4 from "../../assets/HomeBanner/04.jpg";
import img5 from "../../assets/HomeBanner/05.png";
import img6 from "../../assets/HomeBanner/06.png";


export default function HomeBanner() {
    return (
        <Carousel>
            <div className="brightness-75">
                <img src={img1} className="" />
            </div>
            <div className="brightness-75">
                <img src={img2} />
            </div>
            <div className="brightness-75">
                <img src={img3} />
            </div>
            <div className="brightness-75">
                <img src={img4} />
            </div>
            <div className="brightness-75">
                <img src={img5} />
            </div>
            <div className="brightness-75">
                <img src={img6} />
            </div>
        </Carousel>
    )
}