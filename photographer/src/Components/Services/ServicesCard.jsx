import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../Reusable/ScrollToTop";

const ServicesCard = ({ service }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-0 md:m-4 flex-grow dark:bg-neutral-900">
      <img className="w-full h-56" src={service.image} alt={service.title} />
      <div className="px-6 py-4 h-auto">
        <div className="font-bold text-xl mb-2 dark:text-white">
          {service.title}
        </div>
        <p className="text-gray-700 text-base dark:text-white mb-4">
          {service.description}
        </p>
        <Link
          to={`/services/${service.id}`}
          className="btnReadMore"
          onClick={scrollToTop}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
