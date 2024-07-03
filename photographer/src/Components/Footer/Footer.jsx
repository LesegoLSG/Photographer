import React from "react";
import Logo from "../../assets/Logo.png";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  // const navigate = useNavigate();
  return (
    <footer className="bg-white dark:bg-neutral-900 shadow-zinc-950 shadow-lg dark:shadow-2xl dark:shadow-black z-50">
      <div className="p-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4 className="text-2xl pb-4 dark:text-white">Organization</h4>
              <ul className="dark:text-gray-300">
                <li className="pb-4 cursor-pointer">Home</li>
                <li className="pb-4 cursor-pointer">About</li>
                <li className="pb-4 cursor-pointer">Services</li>
                <li className="pb-4 cursor-pointer">Blog</li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-2xl pb-4 dark:text-white">Important Links</h4>
              <ul className="dark:text-gray-300">
                <li className="pb-4 cursor-pointer">Terms of services</li>
                <li className="pb-4 cursor-pointer">Privacy policy</li>
                <li className="pb-4 cursor-pointer">Documentation</li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-2xl pb-4 dark:text-white">Locate Us</h4>
              <p className="text-gray-500 dark:text-gray-300">
                1330 Mosia Street
                <br />
                Soweto <br />
                1868 <br /> <br />
                <strong>Phone:</strong> +27 119328945
                <br />
                <strong>Email:</strong> diasho@gmail.com
                <br />
              </p>
            </div>
            <div className="mg-5 flex justify-center items-center px-6">
              <img src={Logo} alt="Logo" className="" />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="bg-gray-900 text-gray-500 px-10 dark:bg-neutral-950">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
          <div className="text-center">
            <div>
              &copy;{" "}
              <strong>
                <span>Diasho</span>
              </strong>
              . All Rights Reserved
            </div>
            <div>Designed by Lesego Mhlongo --link--</div>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <FaWhatsapp size={30} className="cursor-pointer text-white" />
            <FaFacebook size={30} className="cursor-pointer text-white" />
            <FaInstagram size={30} className="cursor-pointer text-white" />
            <FaXTwitter size={30} className="cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
