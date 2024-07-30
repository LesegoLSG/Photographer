import React, { useContext } from "react";
import { Link } from "react-router-dom";
import servicesData from "../Components/Services/ServicesData";
import ServicesCard from "../Components/Services/ServicesCard";
import { transition1 } from "../Components/Transitions";
import { CursorContext } from "../Context/CursorContext";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section dark:bg-neutral-900"
    >
      {/* Heading and subheading */}
      <div className="w-full h-auto flex flex-col gap-y-4 justify-center items-center pt-36 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.2 }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="h1 dark:text-white text-center"
        >
          Our <span className="text-touch">Expertise</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.4 }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="h2 dark:text-white"
        >
          The Best You Can Get
        </motion.h2>
      </div>
      {/* cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...transition1, delay: 0.8 }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="w-full h-auto flex flex-wrap justify-center items-center gap-4 p-4"
      >
        {servicesData.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ServicesPage;
