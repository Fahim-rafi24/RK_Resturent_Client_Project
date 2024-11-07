import ItemCard from '../../../CommonThink/ItemCard/ItemCard';


const CommonCards = ({ cards, handleCard }) => {




    return (
        <section className='md:p-10 h-[100vh]  md:h-[70vh] overflow-y-scroll scrollbar-hide'>
            <div className='md:grid grid-cols-2 xl:grid-cols-3 md:gap-7 py-20'>
                {
                    cards.map(card => <ItemCard key={card._id} card={card} state={handleCard}></ItemCard>)
                }
            </div>
        </section>
    )
}
export default CommonCards





