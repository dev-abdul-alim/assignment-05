import technologies from '../../data/technologies.json'
const StackCards = ({
  technology,
  addToStack,
  selectedTechnologies
}) => {

  const isAdded = selectedTechnologies.some(
    (item) => item.id === technology.id
  );

  return (

    <div className='inline'>

    <div className='min-h-83 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl px-5 py-5 w-70 mx-10 my-1 border tracking-tighter border-gray-300 rounded-xl'>



      <div className="flex mb-7 items-center justify-between">

        <img className='h-7' src={technology.icon} alt="{technology.name" />

        <h4 className=' whitespace-nowrap px-3 py-1 bg-blue-50 border border-blue-300 rounded-xl text-center font-bold text-blue-400'
        style={{color: technology.themeColor, backgroundColor: `${technology.themeColor}15`, borderColor: `${technology.themeColor}50`}}>{technology.badge}</h4>

      </div>



      <div className="center">

        <h2 className='font-bold text-2xl mb-2'>{technology.name}</h2>

        <p className='text-gray-600 mb-4'>{technology.description}</p>

      </div>



      <div className="flex border-t border-gray-200 mb-8 pt-5 items-center justify-between ">

        <h4 className='bg-gray-100 w-20 text-center rounded-md'>{technology.category}</h4>

        <p className='text-gray-500 tracking-tighter'>{technology.difficulty}</p>

        <h4 className='font-semibold'><span className=" text-yellow-500">★</span> {technology.rating}</h4>

      </div>



      <div className='flex justify-center items-center '>

              <button
        onClick={() => addToStack(technology)}
        disabled={isAdded}
        className={`w-full mt-8 py-3 rounded-full text-white transition ${
          isAdded
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-black hover:scale-[1.02]"
        }`}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>



      </div>



    </div>

</div>

  )

}



export default StackCards