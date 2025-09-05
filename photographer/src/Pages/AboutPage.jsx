import React, { useContext } from "react";
import AboutImage from "../assets/AboutImage.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../Components/Transitions";
import { CursorContext } from "../Context/CursorContext";
import { scrollToTop } from "../Components/Reusable/ScrollToTop";

const AboutPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="w-full min-h-screen md:min-h-[calc(100vh-70px)] px-6 md:px-4 overflow-hidden bg-white dark:bg-neutral-900 mb-12"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-auto relative"
      >
        {/* text & img wrapper */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-24 text-center md:text-left md:pt-40">
          {/* Image */}
          <div className="flex md:max-h-max order-2 md:order-none">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={AboutImage}
              alt=""
              className="md:w-[500px] md:h-[500px] border-4 border-dotted border-touch"
            />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 md:pt-0 md:w-auto z-10 flex flex-col justify-center items-center md:items-start"
          >
            <h1 className="h1 dark:text-white">
              <span className="text-touch">About</span> Us
            </h1>
            <p className="mb-12 w-full text-lg text-start text-black dark:text-white">
              Welcome to my world of visual storytelling! I am a passionate
              photographer and cinematographer dedicated to capturing life's
              most precious moments. With a keen eye for detail and a deep love
              for the art of photography and filmmaking, I create stunning
              visuals that tell unique and heartfelt stories. My work spans a
              variety of styles and settings, ensuring that every image and
              video I produce is as special and unique as the moment it
              represents.
              <br />
              <br />I cater to all events, providing comprehensive photography
              and cinematography services for weddings, baby showers, corporate
              events, and more. Whether you're celebrating a milestone,
              launching a new product, or simply creating memories with loved
              ones, I am here to document your journey with creativity and
              professionalism. Let me help you preserve your cherished moments
              with beautiful, timeless visuals that you will treasure forever.
            </p>
            <Link to={"/portfolio"} className="btn" onClick={scrollToTop}>
              view my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
