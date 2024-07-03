import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "./ServicesData"; //

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  return (
    <div className="container mx-auto px-4 py-8 shadow-lg dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden dark:bg-neutral-900">
        <img
          className="w-full h-80 object-cover"
          src={service.image}
          alt={service.title}
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            {service.title}
          </h2>
          <p className="text-gray-700 text-lg dark:text-white">
            {service.description}
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-2 dark:text-white">
              Details:
            </h3>
            <p className="text-gray-700 dark:text-white">{service.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
