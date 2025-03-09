import React from "react";
import { MdOutlineInventory } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";
import { FaCity } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import image1 from "/images/invent.jpeg";
import image2 from "/images/perm.jpg";
import image3 from "/images/comm.jpg";
import image4 from "/images/assist.png";
import { useTranslation } from "react-i18next";

const sections = [
  {
    key: "service_technical_inventory", // Use translation key for title
    descriptionKey: "service_technical_inventory_description", // Use translation key for description
    icon: MdOutlineInventory,
    image: image1,
  },
  {
    key: "service_construction_permits",
    descriptionKey: "service_construction_permits_description",
    icon: LuConstruction,
    image: image2,
  },
  {
    key: "service_commissioning",
    descriptionKey: "service_commissioning_description",
    icon: FaCity,
    image: image3,
  },
  {
    key: "service_legal_help",
    descriptionKey: "service_legal_help_description",
    icon: GoLaw,
    image: image4,
  },
];

export default function CardList() {
  const { t } = useTranslation(); // Initialize i18next for translations

  return (
    <div className="w-full">
      {sections.map((section, index) => {
        const IconComponent = section.icon;
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={`flex overflow-hidden h-[calc(100vh)] ${
              isEven ? "bg-white text-brand-dark" : "bg-brand-dark text-white"
            }`}
            id={`service-${index}`}
          >
            <div className="container flex flex-col sm:flex-row mx-auto">
              <div className="flex flex-col justify-center items-center text-center h-full">
                <IconComponent className="text-6xl text-brand mb-4" />
                <h2 className="text-3xl font-bold mb-4">
                  {t(section.key)} {/* Dynamic translation for title */}
                </h2>
                <p className="text-2xl font-medium">
                  {t(section.descriptionKey)} {/* Dynamic translation for description */}
                </p>
              </div>
              <img
                src={section.image}
                alt={section.key}
                className="w-full h-full sm:h-[400px] sm:w-[400px] object-cover object-center"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}