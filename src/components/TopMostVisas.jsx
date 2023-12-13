import React, {useState} from "react";
import {motion} from 'framer-motion'
const TopMostVisas = () =>{
    const [currentCard, setCurrentCard] = useState(0);

    const cardsData = [
        { title: 'Card 1', content: 'Content for card 1' },
        { title: 'Card 2', content: 'Content for card 2' },
        { title: 'Card 3', content: 'Content for card 3' },
      ];

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cardsData.length);
  };
    return(
        <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transform ${
                index === currentCard ? '' : 'opacity-0 pointer-events-none'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ldiv>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, impedit quaerat alias assumenda iure id quidem architecto corrupti voluptates enim non? Repellat consequuntur beatae laborum! Non dignissimos hic adipisci iure.
              </ldiv>
            </motion.div>
          ))}
        </div>
        <div className="flex mt-4">
          {cardsData.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-2 bg-gray-500 rounded-full cursor-pointer ${
                index === currentCard ? 'bg-blue-500' : ''
              }`}
              onClick={() => setCurrentCard(index)}
            />
          ))}
        </div>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    )
}
export default TopMostVisas;