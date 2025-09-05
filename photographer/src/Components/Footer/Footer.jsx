import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../../Components/Transitions";
import { CursorContext } from "../../Context/CursorContext";
import Logo from "../../assets/Logo.png";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { scrollToTop } from "../Reusable/ScrollToTop";

const Footer = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <footer className="bg-gray-200 dark:bg-black z-50 ">
      <div className="p-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden md:block mb-5 text-center"
            >
              <h4 className="text-2xl pb-4 dark:text-white">Organization</h4>
              <ul className="dark:text-gray-300">
                <li className="pb-4 cursor-pointer" onClick={scrollToTop}>
                  <Link to="/">Home</Link>
                </li>
                <li className="pb-4 cursor-pointer" onClick={scrollToTop}>
                  <Link to="/about">About</Link>
                </li>
                <li className="pb-4 cursor-pointer" onClick={scrollToTop}>
                  <Link to="/services">Services</Link>
                </li>
                <li className="pb-4 cursor-pointer" onClick={scrollToTop}>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="pb-4 cursor-pointer" onClick={scrollToTop}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="mb-5 text-center"
            >
              <h4 className="text-2xl pb-4 dark:text-white">Locate Us</h4>
              <p className="dark:text-gray-300">
                1330 Mosia Street
                <br />
                Soweto <br />
                1868 <br /> <br />
                <strong>Phone:</strong> +27 62 811 7125
                <br />
                <strong>Email:</strong> diholoseroke1@gmail.com
                <br />
              </p>
            </div>
            <div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="mb-5 text-center"
            >
              <h4 className="text-2xl pb-4 dark:text-white">Documentation</h4>
              <ul className="dark:text-gray-300">
                <li className="pb-4 cursor-pointer">Terms of services</li>
                <li className="pb-4 cursor-pointer">Privacy policy</li>
              </ul>
            </div>

            <div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="mg-5 flex justify-center items-center px-6"
            >
              <Link to="/" onClick={scrollToTop}>
                <img src={Logo} alt="Logo" className="w-40" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-gray-200 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-3 mb-3 sm:mb-0">
            <span>
              © <strong>Diyasho</strong> {new Date().getFullYear()}. All Rights
              Reserved
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-action">
            <a
              href="mailto:diholoseroke1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosMail size={20} />
            </a>
            <a
              href="https://wa.me/0628117125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.facebook.com/diholo.seroke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/diyasho_gallery?igsh=MThwdjV1bTUwczBpOA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
