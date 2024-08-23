import React from 'react';

const Card = ({ card, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={card.image} alt={card.name} />
    </div>
  );
};

export default Card;
