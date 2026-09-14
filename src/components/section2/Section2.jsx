import { useEffect, useState } from "react"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StackCards from "./StackCards"
import YourStack from "./YourStack"

const Section2 = () => {

  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);
  
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    const removeFromStack = (id) => {
      setSelectedTechnologies(
       selectedTechnologies.filter(
        (technology) => technology.id !== id
        )
        );
    };

    const removeAll = () => {
        setSelectedTechnologies([]);
      };

    const addToStack = (technology) => {
      const alreadyAdded = selectedTechnologies.some(
        (item) => item.id === technology.id
      )

      if (alreadyAdded) {
       toast.error("Already added")
        return
      }

      setSelectedTechnologies([
        ...selectedTechnologies,
      technology
      ])

          toast.success(
          <div className="flex items-center gap-3 w-full">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-10 h-10 object-contain shrink-0"
            />

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-black truncate">
                {technology.name}
              </h3>

              <p className="text-sm text-gray-500">
                {technology.category}
              </p>
            </div>
          </div>,
        {
          autoClose: 1000,
          closeButton: true,
          className: "glass-toast",
        }
         )
    }



  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <p className="text-xl font-semibold">
          Loading technologies...
        </p>
      </div>
    );
  }


  return (
    <div className='min-h-screen bg-amber-50'>
      <div className="flex-col px-20 py-10 w- mb-7">
        <h1 className="font-bold text-4xl mb-2">Explore the <span className="bg-linear-to-r brand-gradient font- bg-clip-text text-transparent">Technologies</span></h1>
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

        <div className="px-5 items-center w-full lg:w-75 lg:sticky lg:top-5  self-start">
          <YourStack 
            selectedTechnologies={selectedTechnologies}
            removeFromStack={removeFromStack}
            removeAll={removeAll}
          />
        </div>

      </div>


      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  )
}

export default Section2

