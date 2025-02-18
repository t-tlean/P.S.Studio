import React from "react";
import { MdOutlineInventory } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";
import { FaCity } from "react-icons/fa";
import { GoLaw } from "react-icons/go";

const sections = [
  {
    title: "Технічна інвентаризація",
    description:
      "Ми здійснюємо детальний огляд об'єктів для створення точних технічних паспортів, які є основою для подальших робіт",
    icon: MdOutlineInventory,
  },
  {
    title: "Дозволи на будівництво",
    description:
      "Беремо на себе всі зобов’язання щодо підготовки необхідних документів та взаємодії з державними органами, що економить час і зусилля наших клієнтів",
    icon: LuConstruction,
  },
  {
    title: "Введення в експлуатацію",
    description:
      "Забезпечуємо виконання всіх вимог для отримання відповідних сертифікатів, що підтверджують готовність об'єкта до експлуатації",
    icon: FaCity,
  },
  {
    title: "Юридична допомога",
    description:
      "Консультації, юридичний аналіз і супровід у всіх аспектах, пов’язаних із будівництвом, що дозволяє нашим клієнтам зосередитися на своїх завданнях",
    icon: GoLaw,
  },
];

export default function CardList() {
  return (
    <div className="relative flex flex-col md:flex-row w-full sm:h-[600px] h-full text-white">
      {sections.map((section, index) => {
        const IconComponent = section.icon; // Get the component reference
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={`relative flex-1 flex flex-col items-center justify-center text-center z-10 py-6 sm:py-0
              ${isEven ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
            `}
          >
            {/* Icon & Title */}
            <div className="flex flex-col items-center justify-center min-h-[80px] ">
              <IconComponent className="sm:text-9xl text-7xl  text-brand-light" />{" "}
              {/* Icon color for contrast */}
              <h2 className="text-3xl font-bold">{section.title}</h2>
            </div>

            {/* Always Visible Description */}
            <div className="p-4 text-lg">{section.description}</div>
          </div>
        );
      })}
    </div>
  );
}
