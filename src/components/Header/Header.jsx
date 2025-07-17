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

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToService = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <header className="w-full sticky top-0 z-50">
      <div
        className={`w-full absolute top-0 z-50 flex justify-between items-center transition-all duration-500 ease-out ${
          scrolling
            ? "h-16 backdrop-blur-2xl bg-white/80 opacity-100 shadow-lg px-6"
            : "bg-opacity-0 opacity-100 px-6"
        }`}
      >
        <img
          src={logo}
          alt="logo"
          className={`transition-all duration-500 ease-out ${
            scrolling ? "w-60" : "w-[400px] sm:w-[700px]"
          }`}
        />

        <div
          className={`hidden sm:flex gap-3 ease-in-out ${
            scrolling ? "opacity-100" : "opacity-100"
          }`}
        >
          {["ua", "en", "ru"].map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className="px-5 py-1 bg-transparent text-brand-dark border-b-2 border-brand-dark hover:border-b-4 transition-all ease-in-out text-sm lg:text-2xl font-bold"
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        <div
          className={`sm:hidden flex flex-col gap-2 text-xl ${
            scrolling ? "text-lg gap-2" : "absolute bottom-[-45px] right-10"
          }`}
        >
          {services.map(({ icon: Icon, id, key }, index) => (
            <button
              key={index}
              onClick={() => scrollToService(id)}
              className="flex items-center gap-3 rounded-full bg-brand-dark p-2 text-white hover:bg-brand-light transition ease-in-out"
            >
              <Icon className={scrolling ? "text-2xl" : "text-3xl ml-4"} />
              {!scrolling && <p className="text-center">{t(key)}</p>}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;