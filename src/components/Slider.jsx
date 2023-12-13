
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  { id: 1, content: 'Slide 1' },
  { id: 2, content: 'Slide 2' },
  { id: 3, content: 'Slide 3' },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    console.log("prev",  currentSlide)
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    console.log("prev",  currentSlide)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={currentSlide}>
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            custom={index}
          >
            <div className="bg-gray-200 p-8 rounded-md">
              <h1 className="text-3xl font-bold">{slide.content}</h1>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded-full"
        onClick={prevSlide}
      >
        Prev
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded-full"
        onClick={nextSlide}
      >
        Next


      </button>
    </div>
  );
};

export default Slider;
