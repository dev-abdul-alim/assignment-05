import { useState } from "react";
import technologies from '../../data/technologies.json'
import StackCards from "./StackCards"
import YourStack from "./YourStack"

const Section2 = () => {
  
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [toast, setToast] = useState("");

  const addToStack = (technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

 if (alreadyAdded) {
    setToast("Already added");

    setTimeout(() => {
      setToast("");
    }, 2000);

    return;
  }

  setSelectedTechnologies([
    ...selectedTechnologies,
    technology
  ]);

  setToast("Successfully added");

  setTimeout(() => {
    setToast("");
  }, 1000);
};
  const removeFromStack = (id) => {
    setSelectedTechnologies(
      selectedTechnologies.filter((technology) => technology.id !== id)
    );
  };

  const removeAll = () => {
    setSelectedTechnologies([]);
  };



  return (
    <div className='min-h-screen bg-amber-50'>
      <div className="flex-col px-20 py-10 w- mb-7">
        <h1 className="font-bold text-4xl mb-2">Explore the <span className="bg-linear-to-r from-fuchsia-400 to-fuchsia-700 font- bg-clip-text text-transparent">Technologies</span></h1>
        <p className="text-gray-500">Pick one technology per category to build your ideal stack</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4  items-center justify-center">

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

          {technologies.map((technology) => (
            <StackCards
              key={technology.id}
              technology = {technology}
              addToStack={addToStack}
              selectedTechnologies={selectedTechnologies}
            />)
          )}
        </div>

        <div className="px-5 mx-h-80 w-full lg:w-75 lg:sticky lg:top-5  self-start">
          <YourStack 
          selectedTechnologies={selectedTechnologies}
          removeFromStack={removeFromStack}
          removeAll={removeAll}/>
        </div>

      </div>

      {toast && (
        <div className="fixed bottom-5 right-5 z-50 w-80 flex items-center gap-4 px-5 py-4 bg-green-100/50 border border-green-300 rounded-2xl shadow-lg">
          {toast}
        </div>
      )}
    </div>
  )
}

export default Section2

