import React from "react";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  const contactData = [
    {
      key: "address",
      subtitleKey: "find_us_here",
      textKey: "address_text",
    },
    {
      key: "phone",
      subtitleKey: "call_us",
      textKey: "phone_text",
    },
    {
      key: "email",
      subtitleKey: "write_to_us",
      textKey: "email_text",
    },
  ];

  return (
    <div className="container mx-auto pb-16">
      <div className="text-center pt-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-light">
          {t("we_are_here_for_you")}
        </h2>
        <span className="text-4xl sm:text-6xl font-bold text-brand">
          {t("contact_us")}
        </span>
        <p className="text-brand-light mt-4 text-xl">
          {t("contact_us_description")}
          <br />
          {t("working_hours")}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 relative text-center">
        <ul className="flex flex-col w-full md:w-1/3 gap-6 p-4 rounded-2xl">
          {contactData.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center text-center bg-brand-light text-white border border-gray-300 rounded-xl shadow-md p-5 sm:p-6 space-y-2"
            >
              <p className="border-b text-2xl border-gray-300 pb-2 w-full font-bold">
                {t(item.subtitleKey)}
              </p>
              <div className="flex flex-col items-center gap-2 text-2xl mt-2">
                <h3 className="font-semibold">{t(item.key)}</h3>
              </div>
              {item.key === "phone" ? (
                <div className="flex flex-col text-2xl sm:text-2xl mt-2 text-center">
                  {t(item.textKey)
                    .split("|")
                    .map((part, i) => (
                      <span key={i} className="block">
                        {part.trim()}
                      </span>
                    ))}
                </div>
              ) : (
                <p className="text-2xl sm:text-2xl mt-2">{t(item.textKey)}</p>
              )}
            </li>
          ))}
        </ul>

        <div className="w-full md:w-2/3 h-[300px] md:h-[620px] rounded-lg overflow-hidden shadow-xl flex justify-center items-center">
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
