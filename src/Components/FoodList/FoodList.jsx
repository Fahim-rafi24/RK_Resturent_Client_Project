


export default function FoodList({each}){
    const {name, image, price, recipe}=each;
    return(
        <div className="flex space-x-3">
        <img src={image} className="w-16 h-16 bg-gray-300 rounded-full rounded-tl-none"/>
        <div>
            <h3 className="cinzel text-xl">{name}<span className="hidden lg:block ">--------------------</span></h3>
            <h6>{recipe}</h6>
        </div>
        <p className="text-[#BB8506] font-semibold text-xl raleway">${price}</p>
        </div>
    )
}