import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const PortfolioModal = ({ modalContent, closeModal, rect }) => {
  const [modalStyle, setModalStyle] = useState({});
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (rect) {
      setModalStyle({
        position: "absolute",
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        transform: "translateY(0)",
        transition: "all 0.3s ease",
      });

      setTimeout(() => {
        setExpanded(true);
      }, 0);
    }
  }, [rect]);

  useEffect(() => {
    if (expanded) {
      setModalStyle({
        position: "fixed",
        top: "0%",
        left: "50%",
        width: "80%",
        height: "80%",
        transform: "translate(-50%, -50%)",
        transition: "all 0.3s ease",
      });
    }
  }, [expanded]);

  const handleClose = (e) => {
    if (e.target.id === "main-container") {
      closeModal();
    }
  };

  if (!modalContent) return null;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm w-screen min-h-screen"
      id="main-container"
    >
      <div
        style={modalStyle}
        className="bg-white w-full h-auto md:max-w-[75%] md:max-h-[80%] rounded-lg dark:bg-neutral-900"
      >
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
              className="w-full h-full object-cover rounded"
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
