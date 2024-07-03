import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DH from "../assets/DH.png";
import LandingPagePic from "../assets/LandingPagePic.png";

import { motion } from "framer-motion";
import { transition1 } from "../Components/Transitions";
import { CursorContext } from "../Context/CursorContext";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const HomePage = () => {
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
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="w-full min-h-screen md:h-[calc(100vh-70px)] px-6 md:px-4 overflow-hidden dark:bg-neutral-900"
    >
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
            <h1 className="h1 text-grey-800 dark:text-white">
              Photographer <br /> & Cinematographer
            </h1>
            <h2 className="h2 mb-4 md:mb-12 dark:text-white">
              {/* <span>We offer </span> */}
              <span>{text}</span>
              <Cursor />
            </h2>
            <Link to={"/portfolio"} className="btn mb-[30px] text-center">
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
                src={DH}
                alt=""
                className="h-fit w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomePage;
