import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = ["images/bg1.jpg", "images/bg2.jpg", "images/bg3.jpg"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Preload images to prevent flickering
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleManualSwitch = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <motion.div
      className="relative w-full h-[100vh] overflow-hidden flex justify-between items-center flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            willChange: "opacity, transform",
            backfaceVisibility: "hidden",
            transform: "translate3d(0,0,0)",
          }}
        ></motion.div>
      ))}

      <div className="absolute inset-0 bg-black/55"></div>

      <motion.div
        className="z-30 container mx-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <div className="z-30 text-white w-fit bg-black/40 mx-auto sm:mx-10 p-10 rounded-lg shadow-lg border-l-3 border-brand">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight tracking-wide text-white drop-shadow-md text-nowrap">
            YOUR
            <br />
            <motion.span
              className="text-5xl md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              HOME
            </motion.span>
            <br />
            <motion.span
              className="text-4xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              CAN DO <span className="">MORE </span>
            </motion.span>
          </h1>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-0 z-30 w-[80px] sm:flex hidden flex-col items-end space-y-4 mr-5"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`w-[60px] h-1.5 rounded-2xl cursor-pointer transition-all duration-500 ${
              index === currentIndex ? "w-[80px] bg-white" : "bg-brand-light"
            }`}
            onClick={() => handleManualSwitch(index)}
          ></motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Hero;
