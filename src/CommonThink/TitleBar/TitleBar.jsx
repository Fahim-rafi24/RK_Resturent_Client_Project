



export default function TitleBar({p}){
    return(
        <>
        <div className="flex justify-center hover:text-purple-400 w-fit">
        <p className="border-b-4 border-black text-center pb-2 rounded-b-xl w-40 font-bold">{p}</p>
        </div>
        </>
    )
}