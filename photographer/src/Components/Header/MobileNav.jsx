import React, { useState } from "react";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/Logo.png";
import { scrollToTop } from "../Reusable/ScrollToTop";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.1, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleLinkClick = () => {
    setIsOpenMenu(false);
    scrollToTop();
  };

  return (
    <nav className="">
      {/* nav open button */}
      <div
        onClick={() => setIsOpenMenu(true)}
        className="text-3xl cursor-pointer md:hidden dark:text-white"
      >
        <IoIosMenu />
      </div>
      {/* Menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={isOpenMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 dark:bg-neutral-900"
      >
        {/* icons */}
        <div
          onClick={() => setIsOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer dark:text-white"
        >
          <IoMdClose />
        </div>
        {/* Menu List */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl dark:text-white">
          <li>
            <Link to={"/"} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/services"} onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li>
            <Link to={"/portfolio"} onClick={handleLinkClick}>
              My Work
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          {/* Logo */}
          <li className="mt-8">
            <Link to={"/"} onClick={handleLinkClick}>
              <img src={Logo} alt="Logo" className="w-20 md:w-28" />
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
