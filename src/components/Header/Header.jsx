import React, { useState, useEffect } from "react";
import logo from "../../assets/dark_logo.png";
import { MdOutlineInventory } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";
import { FaCity } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { useTranslation } from "react-i18next"; 

const services = [
  { icon: MdOutlineInventory, id: "service-0", key: "service_technical_inventory" },
  { icon: LuConstruction, id: "service-1", key: "service_construction_permits" },
  { icon: FaCity, id: "service-2", key: "service_commissioning" },
  { icon: GoLaw, id: "service-3", key: "service_legal_help" },
  { icon: GrContact, id: "contacts-section", key: "contacts" },
];

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const { t, i18n } = useTranslation(); 

  // Detect when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToService = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className={`w-full sticky top-0 z-50 `}>
      <div
        className={`w-full absolute top-0 z-50 transition-all duration-500 ease-out  flex justify-center items-center ${
          scrolling
            ? "  h-16 backdrop-blur-2xl bg-white/80 opacity-100 shadow-lg "
            : "  bg-opacity-0  opacity-100"
        }`}
      >
        <div className={`container flex justify-between items-center mx-auto`}>
          <img
            className={`transition-all duration-500 ease-out ${
              scrolling ? "w-60" : "w-[400px] sm:w-[700px] "
            }`}
            src={logo}
            alt="logo"
          />
        </div>

        <div
          className={`sm:flex flex-col gap-3 ease-in-out ${scrolling ? "opacity-0 sm:opacity-100 sm:flex-row" : "opacity-100"}`}
        >
          {["ua", "en", "ru"].map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className="px-5 py-1 bg-transparent text-brand-dark border-b-2 border-brand-dark hover:border-b-4 transition-all ease-in-out text-sm lg:text-2xl font-bold sm:w-auto w-full"
          >
          {lang.toUpperCase()}
          </button>
        ))}
        </div>

        <div
          className={`sm:hidden block ${
            scrolling
              ? "flex text-lg gap-2"
              : " absolute -bottom-180  right-10 h-fit flex flex-col sm:flex-row justify-start text-xl gap-2"
          }`}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={index}
                className={`p-2 ${
                  scrolling ? "" : ""
                }  flex  items-center  gap-3 p-1 rounded-full  bg-brand-dark hover:bg-brand-light ease-in-out text-white`}
                onClick={() => scrollToService(service.id)}
              >
                <Icon
                  className={`${scrolling ? "text-2xl" : "text-3xl ml-4"}`}
                />
                {!scrolling && <p className="text-center">{t(service.key)}</p>}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;