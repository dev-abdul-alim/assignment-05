import React from 'react'

const YourStack = ({
  selectedTechnologies,
  removeFromStack,
  removeAll
}) => {  
  
  return (
    <div className="w-full max-w-sm border border-gray-300 rounded-2xl px-5 py-6 tracking-tighter bg-transparent shadow-2xl">

      <div className="mb-6">
        <h1 className="font-bold text-2xl">
          Your Stack
        </h1>

        <p className="text-gray-500">
          {selectedTechnologies.length === 0 ? "No Technology Selected" : `${selectedTechnologies.length} ${selectedTechnologies.length=== 1 ? "Technology" : "Technologies"} Selected`}
          </p>     
      </div>

      <div className="flex flex-col items-center justify-center gap-5 min-h-32">

              <div className="mt-6 space-y-3">

        {selectedTechnologies.length === 0 ? (

          <p className="w-full sm:max-w-60 lg:w-40 border border-dashed border-gray-300 rounded-xl text-gray-400 text-center py-8">
            Your Stack is empty
          </p>

        ) : (

          selectedTechnologies.map((technology) => (

            <div
              key={technology.id}
              className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-3">

              <img
                src={technology.icon}
                alt={technology.name}
                className="w-8 h-8"
              />


              <div className="flex-1 min-w-0">

                <h3 className="font-semibold truncate">
                  {technology.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {technology.category}
                </p>

              </div>


              <button
                onClick={() => removeFromStack(technology.id)}
                className="text-gray-400 hover:text-red-500 text-xl"
              >
                ×
              </button>

            </div>

          ))

        )}

      </div>


        <button
          onClick={removeAll}
          disabled={selectedTechnologies.length === 0}
          className="text-sm text-red-500 border h-10 w-26 rounded-2xl border-red-500 disabled:text-gray-300">
          Remove All
        </button>

      </div>

    </div>
  )
}

export default YourStack
