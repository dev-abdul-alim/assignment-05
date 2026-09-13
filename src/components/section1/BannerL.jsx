const BannerL = () => {
  return (
    <div className="flex-col gap-4 m-10 ">

      <div className="flex-col gap-4">
        <h1 className="text-5xl font-[650] my-4 ">Build Your Ideal <br />         <span className="bg-linear-to-r from-orange-600 to-fuchsia-600 bg-clip-text text-transparent">Development Stack</span></h1>

        <p className="my-6 text-gray-500">Explore frontend, backend, database, and tooling options, <br /> compare them side by side, and put together the stack that fits your <br/> next projext.</p>
      </div>

      <div className="flex gap-8">
        <button className="bg-linear-to-r from-orange-600 via-pink-500 to-fuchsia-300 text-white px-3 py-2 rounded-xl">Explore Tecnologies</button>
        <button className="border border-gray-300 px-5 text-gray-600 py-2 rounded-xl">Learn More</button>
      </div>
    </div>
  )
}

export default BannerL
