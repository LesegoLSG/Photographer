import React from 'react'

const PortfolioCard = ({singleData}) => {
  return (
    <div className="w-[300px] h-[300px] object-fill">
        {singleData.category === "image" ? (
        <img
          src={singleData.content}
          alt="Portfolio Content"
          className="w-full h-full object-cover"
        />
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