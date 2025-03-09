import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../../assets/white_logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-dark text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          {/* Logo & About */}
          <div>
            <img
              src={logo}
              alt="Company Logo"
              className="mx-auto md:mx-0 w-[260px] mb-4"
            />
            <p className="text-gray-400">{t("footer_about")}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("contact_us")}</h3>
            <p className="text-gray-400">{t("address_text")}</p>
            <p className="text-gray-400">{t("phone_text")}</p>
            <p className="text-gray-400">p.s.studio.main@gmail.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} P.S.Studio. {t("all_rights_reserved")}
          </p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;