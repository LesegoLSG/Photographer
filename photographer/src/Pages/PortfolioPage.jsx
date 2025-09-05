import React, { useState, useContext, useRef, useEffect } from "react";
import data from "../Components/Portfolio/PortfolioData";
import PortfolioCard from "../Components/Portfolio/PortfolioCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PortfolioModal from "../Components/Portfolio/PortfolioModal";
import { transition1 } from "../Components/Transitions";
import { CursorContext } from "../Context/CursorContext";
import { scrollToTop } from "../Components/Reusable/ScrollToTop";

import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const PortfolioPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;

  const imageSectionRef = useRef(null);

  const filterData = data.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  // Pagination
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = filterData.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(filterData.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Glightbox useEffect
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });

    return () => {
      lightbox.destroy();
    };
  }, [currentPage, filter]);

  // Scroll to image section
  const scrollToImageSection = () => {
    if (imageSectionRef.current) {
      imageSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Change current page
  const changeCurrentPage = (id) => {
    setCurrentPage(id);
    scrollToImageSection();
  };

  // Go to prev page
  const PrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToImageSection();
    }
  };
  // Go to next page
  const NextPage = () => {
    if (currentPage < nPages) {
      setCurrentPage(currentPage + 1);
      scrollToImageSection();
    }
  };

  // Filter
  const handleFilterChange = (category) => {
    setFilter(category);
    setCurrentPage(1); // Reset to the first page when changing filter
    scrollToImageSection();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section pt-32  mb-12"
    >
      <div
        className=" w-full flex-col md:flex-row justify-center items-center "
        ref={imageSectionRef}
      >
        <motion.h1
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="h1 dark:text-white text-center"
        >
          <span className="text-touch">Creative</span> Work
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.4 }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="h2 dark:text-white text-center pb-4"
        >
          Memories keep the past alive
        </motion.h2>
      </div>
      {/* Filter buttons */}
      <div className="w-full h-auto flex justify-center items-center flex-wrap gap-x-2 gap-y-2 my-2">
        <button
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className={`min-w-[70px] py-2 px-4 bg-black text-white rounded md:btn1 ${
            filter === "all" ? "bg-primary" : ""
          }`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className={`min-w-[70px] py-2 px-4 bg-black text-white rounded md:btn1 ${
            filter === "wedding" ? "bg-primary" : ""
          }`}
          onClick={() => handleFilterChange("wedding")}
        >
          Wedding
        </button>
        <button
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className={`min-w-[70px] py-2 px-4 bg-black text-white rounded md:btn1 ${
            filter === "portrait" ? "bg-primary" : ""
          }`}
          onClick={() => handleFilterChange("portrait")}
        >
          Portrait
        </button>
        <button
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className={`min-w-[70px] py-2 px-4 bg-black text-white rounded md:btn1 ${
            filter === "travel" ? "bg-primary" : ""
          }`}
          onClick={() => handleFilterChange("travel")}
        >
          Travel Landscape
        </button>
        <button
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className={`min-w-[70px] py-2 px-4 bg-black text-white rounded md:btn1 ${
            filter === "editing" ? "bg-primary" : ""
          }`}
          onClick={() => handleFilterChange("editing")}
        >
          Editing
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center overflow-x-auto md:overflow-x-visible">
        <motion.div className="w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {currentRecords.map((singleData, index) => (
            <PortfolioCard key={index} singleData={singleData} />
          ))}
        </motion.div>
        {/* Pagination */}
        <nav className="my-10">
          <div className="flex justify-center items-center space-x-1">
            <button
              onClick={PrevPage}
              className={`px-4 py-2 border rounded-md ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                  : "bg-primary text-white"
              }`}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {numbers.map((n, i) => (
              <button
                key={i}
                className={`px-4 py-2 border rounded-md ${
                  currentPage === n
                    ? "bg-primary text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => changeCurrentPage(n)}
              >
                {n}
              </button>
            ))}
            <button
              onClick={NextPage}
              className={`px-4 py-2 border rounded-md ${
                currentPage === nPages
                  ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                  : "bg-primary text-white"
              }`}
              disabled={currentPage === nPages}
            >
              Next
            </button>
          </div>
        </nav>
        <Link to={"/contact"} className="btn" onClick={scrollToTop}>
          Hire Me
        </Link>
        //{" "}
      </div>
      {isModal && (
        <PortfolioModal modalContent={modalContent} closeModal={closeModal} />
      )}
    </motion.section>
  );
};

export default PortfolioPage;
