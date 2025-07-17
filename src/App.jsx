import { useState, useEffect } from "react";
import CardList from "./components/CardSection/CardList";
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import logo from "./assets/white_sign.png";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setFadeOut(true), 750); // Fade out start
    const loadTimeout = setTimeout(() => setLoading(false), 750); // Remove loader

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(loadTimeout);
    };
  }, []);

  return loading ? (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-brand-dark z-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={logo}
        alt="Logo"
        className="w-32 h-auto animate-pulse"
        loading="eager"
        decoding="sync"
      />
    </div>
  ) : (
    <main className="w-full">
      <Header />
      <section className="select-none">
        <Hero />
      </section>
      <section className="select-none sm:hidden block">
        <CardList />
      </section>
      <section id="contacts-section" className="mt-16">
        <Contacts />
      </section>
      <Footer />
    </main>
  );
};

export default App;
