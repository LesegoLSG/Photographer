import React, { useContext } from "react";
import { motion } from "framer-motion";
import { transition1 } from "../../Components/Transitions";
import { CursorContext } from "../../Context/CursorContext";

import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4  text-action">
        <li>
          <a
            href="mailto:diholoseroke1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosMail size={22} />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/0628117125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20} />
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com/diholo.seroke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={20} />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/diyasho_gallery?igsh=MThwdjV1bTUwczBpOA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
