import React from "react";
import { IoMdClose } from "react-icons/io";

const PortfolioModal = ({ modalContent, closeModal }) => {
  const handleClose = (e) => {
    if (e.target.id === "main-container") {
      closeModal();
    }
  };

  if (!modalContent) return null;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm "
      id="main-container"
    >
      <div className="bg-white w-4/5 md:w-3/4 h-auto  rounded-lg relative dark:bg-neutral-900">
        <div className="w-full h-auto flex justify-end p-2">
          <button onClick={closeModal} className="focus:outline-none">
            <IoMdClose size={30} />
          </button>
        </div>
        <div className="w-full flex justify-center items-center p-6">
          {modalContent.format === "image" ? (
            <img
              src={modalContent.content}
              alt=""
              className="max-w-full max-h-fit rounded"
            />
          ) : (
            <iframe
              src={modalContent.content}
              title="Portfolio Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
