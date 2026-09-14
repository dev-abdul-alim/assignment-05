import StackCards from "./StackCards"
import YourStack from "./YourStack"

const Section2 = () => {
  return (
    <div className='min-h-screen bg-amber-50'>
      <div className="flex-col px-20 py-10 w- mb-7">
        <h1 className="font-bold text-4xl mb-2">Explore the <span className="bg-linear-to-r from-fuchsia-400 to-fuchsia-700 font- bg-clip-text text-transparent">Technologies</span></h1>
        <p className="text-gray-500">Pick one technology per category to build your ideal stack</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4  items-center">

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
          <StackCards />
        </div>

        <div className=" px-5 w-full lg:w-75 self-start">
          <YourStack />
        </div>

      </div>
    </div>
  )
}

export default Section2

