import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
  const contactData = [
    {
      icon: <FaMapMarkerAlt className="text-brand text-3xl sm:text-4xl text-brand-light" />,
      title: "Адреса",
      subtitle: "Знайдіть нас тут",
      text: "Черкаси, вул. Б. Вишневецького, буд. 37, офіс 502",
    },
    {
      icon: <FaPhoneAlt className="text-brand text-3xl sm:text-4xl text-brand-light" />,
      title: "Телефон",
      subtitle: "Зателефонуйте нам",
      text: "+38 (066) 785 0311  +38 (067) 114 3392",
    },
    {
      icon: <FaEnvelope className="text-brand text-3xl sm:text-4xl text-brand-light" />,
      title: "Електронна пошта",
      subtitle: "Напишіть нам",
      text: "p.s.studio.main@gmail.com",
    },
  ];

  return (
    <div className="container mx-auto pb-12 px-4 sm:px-8">
      {/* Header */}
      <div className="text-center p-8 sm:p-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          Ми тут для вас,
        </h2>
        <span className="text-4xl sm:text-6xl uppercase font-bold text-brand">
          Зв'яжіться з нами
        </span>
        <p className="text-gray-600 mt-4 text-base sm:text-lg">
          Є питання щодо нас або наших послуг? Будь ласка, звертайтеся до нас.
          <br />
          Ми працюємо з <span className="font-bold">10:00 до 18:00</span>, з
          понеділка по п’ятницю.
        </p>
      </div>

      {/* Contact Info & Map */}
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
        {/* Contact Info */}
        <ul className="flex flex-col w-full md:w-1/3 gap-6">
          {contactData.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center bg-white border border-gray-300 rounded-xl shadow-md p-5 sm:p-6"
            >
              <p className="border-b text-lg sm:text-xl border-gray-300 pb-2 w-full">
                {item.subtitle}
              </p>
              <div className="flex items-center gap-2 text-xl sm:text-2xl mt-2">
                {item.icon}
                <h3>{item.title}</h3>
              </div>
              <p className="text-lg sm:text-xl mt-2">{item.text}</p>
            </li>
          ))}
        </ul>

        {/* Google Map */}
        <div className="w-full md:w-2/3 h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
          <iframe
            title="map"
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1297.0200862966508!2d32.059955040746594!3d49.44595773064656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14d2b343c5d41%3A0x74cfceec03cb6e0f!2sP.S.%20STUDIO!5e0!3m2!1sua!2sua!4v1739875746499!5m2!1sua!2sua"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
