


export default function CommonBanner({ bgImg, header, p }) {
    return (
        <div id={bgImg} className="md:p-24 lg:p-30 flex flex-col cinzel">
            <div
            className="max-w-[100vw] max-h-[100vh] border flex-grow bg-[#00000046] text-white grid justify-center items-center text-center">
                <section>
                    <h1 className="text-2xl md:text-8xl font-semibold">{header}</h1>
                    <h4 className="mt-5 font-bold">{p}</h4>
                </section>
            </div>
        </div>
    )
}