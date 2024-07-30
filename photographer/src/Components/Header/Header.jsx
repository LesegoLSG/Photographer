import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import Logo from "../../assets/Logo.png";
import { CursorContext } from "../../Context/CursorContext";
import Toggle from "../Toggle/Toggle";
import { scrollToTop } from "../Reusable/ScrollToTop";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className="fixed w-full px-[30px] lg:pt-6 lg:px-[100px] z-30 h-[70px] lg:h-[70px] flex items-center bg-white dark:bg-neutral-900">
      <div className="flex flex-row lg:items-center w-full justify-between">
        {/* Logo and Toggle */}
        <div className="flex items-center">
          <Link
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            to={"/"}
            className="max-w-[100px] md:max-w-[140px]"
          >
            <img src={Logo} alt="Logo" />
          </Link>
          {/* Toggle dark/light mode */}
          <div
            className=""
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </div>
        </div>

        {/* Navigation */}
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden md:flex gap-x-12 font-semibold"
        >
          <Link
            to={"/"}
            className="text-gray-800 dark:text-white"
            onClick={scrollToTop}
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-gray-800 dark:text-white"
            onClick={scrollToTop}
          >
            About
          </Link>
          <Link
            to={"/services"}
            className="text-gray-800 dark:text-white"
            onClick={scrollToTop}
          >
            Services
          </Link>
          <Link
            to={"/portfolio"}
            className="text-gray-800 dark:text-white"
            onClick={scrollToTop}
          >
            My Work
          </Link>
          <Link
            to={"/contact"}
            className="text-gray-800 dark:text-white"
            onClick={scrollToTop}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Socials */}
      <Socials />
      {/* Mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
