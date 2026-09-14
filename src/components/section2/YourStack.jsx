import React from 'react'

const YourStack = () => {
  return (
    <div className="w-full max-w-sm border border-gray-300 rounded-2xl px-5 py-6 tracking-tighter bg-transparent shadow-2xl">

      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-bold text-2xl">
          Your Stack
        </h1>

        <p className="text-gray-500">
          2 Technology Selected
        </p>
      </div>

      {/* Stack content */}
      <div className="flex flex-col items-center justify-center gap-5 min-h-32">

        <div>
          <span className="text-gray-400">
            No technologies added
          </span>
        </div>

        <button className="border border-gray-700 w-full sm:w-30 rounded-2xl h-8 hover:bg-gray-100 transition">
          Remove All
        </button>

      </div>

    </div>
  )
}

export default YourStack