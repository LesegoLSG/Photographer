import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DH from "../assets/DH.png";
import Camera from "../assets/Camera.jpg";
import LandingPagePic from "../assets/LandingPagePic.png";

import { motion } from "framer-motion";
import { transition1 } from "../Components/Transitions";
import { CursorContext } from "../Context/CursorContext";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { scrollToTop } from "../Components/Reusable/ScrollToTop";

const HomePage = ({ isDarkMode }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const [text] = useTypewriter({
    words: [
      "Crafting lasting memories through professional portrait photography.",
      "Documenting every moment of your special day with elegance and style",
      "Creating cinematic memories of your wedding day that last a lifetime.",
      "Telling compelling stories through high-quality documentary videos.",
    ],
    loop: {},
    typeSpeed: 120,
  });

  // State to hold diagonal split colors
  const [bgColors, setBgColors] = useState({
    color1: "#205295",
    color2: "#84A7A1",
  });

  // Example toggle function (can connect to your Header toggle)
  useEffect(() => {
    if (isDarkMode) {
      setBgColors({
        color1: "#18181B",
        color2: "#0E2954",
      });
    } else {
      setBgColors({
        color1: "#ffffff",
        color2: "#E5E7EB",
      });
    }
  }, [isDarkMode]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      style={{
        background: `linear-gradient(135deg, ${bgColors.color1} 50%, ${bgColors.color2} 50%)`,
      }}
      className="w-full min-h-screen md:h-[calc(100vh-70px)] px-6 md:px-4 overflow-hidden dark:bg-neutral-900"
    >
      {/* Floating background image */}
      {/* <motion.img
        src={Camera} // replace with your small image path
        alt="Floating"
        className="absolute w-24 h-24 top-10 left-10 opacity-30 pointer-events-none z-0"
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      /> */}

      <div className="container mx-auto h-auto relative">
        {/* text and img wrapper */}
        <div className=" flex flex-col justify-center">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full pt-36 pb-14 md:pt-0 md:pb-0 md:w-full z-10 md:absolute flex flex-col justify-center items-start md:items-start"
          >
            <div className="w-full h-auto">
              {" "}
              <h1 className="h1 text-grey-800 dark:text-white">
                <span className="text-touch">Photo</span>
                grapher <br /> & Video
                <span className="text-touch">grapher</span>
              </h1>
            </div>

            <div className="w-full h-28 lg:h-14">
              <h2 className="h2 mb-4 md:mb-12 dark:text-white">
                {text}
                <Cursor />
              </h2>
            </div>

            <Link
              to={"/portfolio"}
              className="btn mb-[30px] text-center"
              onClick={scrollToTop}
            >
              View Work
            </Link>
          </motion.div>
          {/* img */}
          <div className="flex justify-end items-center md:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ exit: 0 }}
              transition={transition1}
              className="relative md:-right-40 w-full md:w-3/4 md:pt-20"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={LandingPagePic}
                alt=""
                className="h-fit w-full object-cover "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomePage;
