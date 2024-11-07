// 
import Tilt from 'react-parallax-tilt';




export const ShefHand = ({ h, p, img }) => {
    return (
        <div className='w-[90%] mx-auto'>
            <Tilt
                className="tilt-img"
                tiltMaxAngleX={35}
                tiltMaxAngleY={35}
                perspective={900}
                scale={1.1}
                transitionSpeed={2000}
                gyroscope={true}
            >
                <section className={`lg:p-60 mx-2 md:mx-auto ${img}`} >
                    <div className="text-zinc-300 text-center bg-[#00000074] p-5 md:p-14">
                        <h2 className="text-3xl font-bold cinzel">{h}</h2>
                        <p className="raleway">{p}</p>
                    </div>
                </section >
            </Tilt>
        </div>
    )
}