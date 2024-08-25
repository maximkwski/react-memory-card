import React from 'react';

const Card = ({ card, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={card.image} alt={card.name} />
      <p>{card.name}</p>
    </div>
  );
};

export default Card;
