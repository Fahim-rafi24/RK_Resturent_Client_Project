








export default function RoyelDivBar({p, header, border}) {
    return (
        <section className="flex my-10 justify-center">
            <div className="lg:w-2/6 text-center">
            <h6 className="text-[#D99904] md:text-2xl mb-2">{p}</h6>
            <hr className={`border md:border-2 ${border}`}/>
            <h2 className="text-gray-800 text-4xl font-bold py-3">{header}</h2>
            <hr className={`border md:border-2 ${border}`}/>
            </div>
        </section>
    )
}