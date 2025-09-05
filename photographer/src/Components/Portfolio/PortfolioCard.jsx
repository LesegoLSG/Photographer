import React from "react";

const PortfolioCard = ({ singleData }) => {
  if (!singleData || !singleData.content) {
    return null;
  }

  const isVideo = singleData.format === "video";

  return (
    <a
      href={singleData.content}
      className="glightbox"
      data-gallery="portfolio"
      {...(isVideo && {
        "data-type": "video",
        "data-source": "html5",
      })}
    >
      <div className="w-[300px] h-[300px] object-fill">
        {isVideo ? (
          <video
            src={singleData.content}
            className="w-full h-full object-cover"
            muted
            playsInline
            autoPlay
            loop
          />
        ) : (
          <img
            src={singleData.content}
            alt="Portfolio Content"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>
    </a>
  );
};
export default PortfolioCard;
