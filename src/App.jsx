import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import HomePage from "./components/pages/HomePage.jsx";
import Telechargement from "./components/pages/Telechargement.jsx";
import Header from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* PAGE ACCUEIL */}
        <Route path="/" element={<HomePage />} />

        {/* PAGE TELECHARGEMENT */}
        <Route path="/telechargement" element={<Telechargement />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );

}
