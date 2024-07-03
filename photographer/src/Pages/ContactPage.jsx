import React, { useContext } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactCam from "../assets/ContactCam.png";
import { motion } from "framer-motion";
import { transition1 } from "../Components/Transitions";
import { CursorContext } from "../Context/CursorContext";

const ContactPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      // initial={{opacity:0,y:'100%'}}
      // animate={{opacity:1,y:0}}
      // exit={{opacity:0,y:'100%'}}
      // transition={transition1}
      className="w-full min-h-screen md:h-[calc(100vh-100px)] px-6 md:px-4 bg-white dark:bg-neutral-900"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row h-full items-center justify-start pt-30 gap-x-8 text-center md:text-left">
          {/* bg */}
          {/* <div className="hidden md:flex bg-blue-800 absolute top-72 bottom-0 left-0 right-0 -z-10">bg</div> */}
          {/* text and form */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="pt-20 md:flex-1 md:pt-32 px-4"
          >
            <h1 className="h1 dark:text-white">Contact me</h1>
            <p className="dark:text-white">I would love to work with you</p>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-x-6 my-4 dark:text-white">
              <a
                href="https://wa.me/0628117125"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-white"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063661851191"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-white"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-white"
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/diyasho_gallery?igsh=MThwdjV1bTUwczBpOA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-white"
              >
                <FaInstagram size={24} />
              </a>
            </div>

            {/* form */}
            <form className=" flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary dark:border-b-white h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] dark:placeholder:text-white dark:text-white"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="outline-none border-b border-b-primary dark:border-b-white h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] dark:placeholder:text-white dark:text-white"
                  type="text"
                  placeholder="Your Email Address"
                />
              </div>
              <input
                className="outline-none border-b border-b-primary dark:border-b-white h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] dark:placeholder:text-white dark:text-white"
                type="text"
                placeholder="Your Message"
              />
              <button className="btn mb-[30px] mx-auto md:mx-0 self-start">
                Send
              </button>
            </form>
          </motion.div>
          {/* image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ exit: 0, y: "100%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="md:flex-1"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={ContactCam}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
