import React from "react";

import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4 dark:text-white">
        <li>
          <a href="http:www.whatsapp.com" target="_blank">
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a href="http:www.facebook.com" target="_blank">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="http:www.twitter.com" target="_blank">
            <FaXTwitter />
          </a>
        </li>
        <li>
          <a href="http:www.instagram.com" target="_blank">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
