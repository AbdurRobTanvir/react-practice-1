import React from "react";

const SingleCard = ({ card, setBlogDetails }) => {
  return (
    <div className="single-card">
      <div className="single-card-title">{card.title}</div>
      <img src={card.image} alt=" single card "></img>
      <div className="single-card-details">
        <div className="single-card-description"> {card.description}</div>
        <div>Catagory: {card.caption}</div>
        <div>Tag: Best Design, Fashion Design</div>
      </div>
      <button
        className="single-card-btn"
        onClick={() => {
          setBlogDetails();
        }}
      >
        Previous Page
      </button>
    </div>
  );
};

export default SingleCard;
