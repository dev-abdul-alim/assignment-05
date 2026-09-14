
const StackCards = () => {

  return (

    <div className='inline'>

    <div className='h-83 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl px-5 py-5 w-70 mx-10 my-1 border tracking-tighter border-gray-300 rounded-xl'>



      <div className="flex mb-7 items-center justify-between">

        <img className='h-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35wn1WS6yA_lP2clChNCuxdD8KK3DcP-vC-bSJlxjYg&s" alt="" />

        <h4 className='bg-blue-50 border border-blue-300 rounded-xl w-20 text-center font-bold text-blue-400'>Popular</h4>

      </div>



      <div className="center">

        <h2 className='font-bold text-2xl mb-2'>React</h2>

        <p className='text-gray-600 mb-4'>A declarative, component-based JavaScript library for building modern user interfaces.</p>

      </div>



      <div className="flex border-t border-gray-200 mb-8 pt-5 items-center justify-between ">

        <h4 className='bg-gray-100 w-20 text-center rounded-md'>Frontend</h4>

        <p className='text-gray-500 tracking-tighter'>Beginner-Friendly</p>

        <h4 className='font-semibold'><span className=" text-yellow-500">★</span> 4.9</h4>

      </div>



      <div className='flex justify-center items-center '>

              <button className='bg-black rounded-2xl text-white w-40 h-8'>Add to Stack</button>



      </div>



    </div>

</div>

  )

}



export default StackCards