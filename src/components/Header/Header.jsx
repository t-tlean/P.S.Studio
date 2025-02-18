import React, { useState, useEffect } from "react";
import logo from "../../assets/white_logo.png";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

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

  const scrollToContacts = () => {
    const contactsSection = document.getElementById("contacts-section");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`w-full sticky top-0 z-50`}>
      <div
        className={`w-full absolute top-0 z-50 transition-all duration-700 ease-out ${
          scrolling
            ? "  h-14 backdrop-blur-2xl bg-black/40 opacity-100 shadow-lg "
            : " h-0 bg-opacity-0 opacity-100"
        }`}
      >
        <div
          className={`container flex justify-between items-center mx-auto px-2 transition-all duration-700 ease-out ${
            scrolling ? "mt-0" : "mt-16"
          } `}
        >
          <div className="">
            <img
              className={`${
                scrolling ? "w-50 " : "w-[760px]  "
              } transition-all duration-700 ease-out`}
              src={logo}
              alt="logo"
            />
          </div>
          <div
            className={`${
              scrolling ? "lg:text-lg" : "hidden sm:block" 
            } transition-all duration-700 ease-out text-gray-100 text-md lg:text-3xl cursor-pointer hover:text-white border-2 border-transparent  hover:border-b-white p-3`}
            onClick={scrollToContacts}
          >
            Зв'язатись з нами
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;