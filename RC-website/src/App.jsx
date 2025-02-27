import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main1 from "./components/Main1";
import Main2 from "./components/Main2";
import Footer from "./components/Footer";
import CopyrightFooter from "./components/CopyrightFooter";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // Check if the bottom of the hero section is at or above the top of the viewport
        if (heroBottom <= 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <Hero id="hero-section" />
      <Main1 />
      <Main2 />
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default App;