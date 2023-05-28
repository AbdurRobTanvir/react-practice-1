import React from "react";

const CardFunction = ({ card, setBlogDetails }) => {
  return (
    <div>
      <div className="card" onClick={() => setBlogDetails(card)}>
        <div className="card-body">
          <img className="card-image" src={card.image} alt="card img" />
          <div className="card-details">
            <div className="card-caption card-color-text ">{card.caption}</div>
            <div className="card-title">{card.title}</div>
            <div className="card-description">{card.description}</div>
            <div className="card-footer clearfix">
              <div className="card-author card-color-text ">{card.author}</div>
              <div className="card-publish-date card-color-text ">
                {card.publishDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFunction;
