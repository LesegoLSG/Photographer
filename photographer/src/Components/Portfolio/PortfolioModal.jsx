import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const PortfolioModal = ({ modalContent, closeModal }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExpanded(true);
    }, 0);
  }, []);

  if (!modalContent) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={closeModal}
      id="main-container"
    >
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] lg:w-[80vw] h-[80vh] bg-white dark:bg-neutral-900 rounded-lg shadow-lg transition-all duration-300 ${
          expanded ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <button onClick={closeModal} className="focus:outline-none">
            <IoMdClose size={30} className="text-gray-800 dark:text-white" />
          </button>
        </div>

        {/* Image or Video */}
        <div className="w-full h-full flex justify-center items-center p-6">
          {modalContent.format === "image" ? (
            <img
              src={modalContent.content}
              alt="Portfolio"
              className="w-full h-full object-contain rounded"
            />
          ) : (
            <iframe
              src={modalContent.content}
              title="Portfolio Video"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
