



export const ShefHand = ({h, p}) => {
    return (
        <section className="md:p-20 lg:p-32 mx-2 md:mx-auto shef_hand">
            <div className="text-zinc-300 text-center bg-[#00000074] p-5 md:p-14">
                <h2 className="text-3xl font-bold cinzel">{h}</h2>
                <p className="raleway">{p}</p>
            </div>
        </section>
    )
}