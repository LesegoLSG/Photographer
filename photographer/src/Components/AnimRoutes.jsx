import React from "react";
import AboutPage from "../Pages/AboutPage";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";
import PortfolioPage from "../Pages/PortfolioPage";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ServicesPage from "../Pages/ServicesPage";
import ServiceDetails from "./Services/ServiceDetails";

const AnimRoutes = ({ isDarkMode }) => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
