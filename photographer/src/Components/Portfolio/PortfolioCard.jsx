import React from 'react';
import { RxEnterFullScreen } from "react-icons/rx";

const PortfolioCard = ({singleData,openModal}) => {
  return (
    <div className="w-[300px] h-[300px] object-fill">
        {singleData.format === "image" ? (
          <div className="w-full h-full relative">
                 <img
          src={singleData.content}
          alt="Portfolio Content"
          className="w-full h-full object-cover "
         
        />
        <RxEnterFullScreen
         onClick={() => openModal(singleData)}
        className="absolute bottom-0 right-0 m-3 w-10 h-10 cursor-pointer text-black"/>
          </div>
     
        

      ) : (
        <iframe
          src={singleData.content}
          title="Portfolio Video"
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
}

export default PortfolioCard