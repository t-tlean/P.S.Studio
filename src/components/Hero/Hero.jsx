import React, { useState, useEffect } from "react";
import { MdOutlineInventory } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";
import { FaCity } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { useTranslation } from "react-i18next"; 

const sections = [
  {
    key: "service_technical_inventory", 
    descriptionKey: "service_technical_inventory_description", 
    icon: MdOutlineInventory,
    image: "public/images/bg1.jpeg",
  },
  {
    key: "service_construction_permits",
    descriptionKey: "service_construction_permits_description",
    icon: LuConstruction,
    image: "public/images/bg2.jpeg",
  },
  {
    key: "service_commissioning",
    descriptionKey: "service_commissioning_description",
    icon: FaCity,
    image: "public/images/bg3.jpeg",
  },
  {
    key: "service_legal_help",
    descriptionKey: "service_legal_help_description",
    icon: GoLaw,
    image: "public/images/bg4.jpeg",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useTranslation(); 

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleManualSwitch = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center bg-white">
      {sections.map((section, index) => {
        const IconComponent = section.icon;
        return (
          <div
            key={index}
            className={`absolute z-10 bottom-0 left-0 w-full sm:h-[75%] h-[85%] bg-cover bg-center transition-all duration-500 ${
              index === currentIndex ? "opacity-100 " : "opacity-0 "
            }`}
            style={{ backgroundImage: `url(${section.image})` }}
          >
            <div className="absolute inset-0 bg-black/45"></div>

            <div className="hidden absolute inset-0 sm:flex flex-col justify-center items-center text-center text-white px-6 space-y-8">
              <IconComponent className="text-9xl text-white mb-6" />
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                {t(section.key)} {/* Dynamic title translation */}
              </h2>
              <p className="text-3xl sm:text-3xl max-w-3xl leading-relaxed">
                {t(section.descriptionKey)} {/* Dynamic description translation */}
              </p>
            </div>
          </div>
        );
      })}

      <div className="absolute top-1/2 right-0 z-30 w-[80px] sm:flex hidden flex-col items-end space-y-4 mr-5">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-[60px] h-2 rounded-2xl transition-all duration-900 cursor-pointer ${
              index === currentIndex ? "w-[80px] bg-white" : "bg-brand-light"
            }`}
            onClick={() => handleManualSwitch(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;