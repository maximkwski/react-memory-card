import React from "react";
import Card from './Card';

const CardGrid = ({ cards, onCardClick }) => {
    return (
        <div className="card-grid">
            {cards.map(card => (
                <Card 
                    key={card.id}
                    card={card}
                    onClick={() => onCardClick(card.id)}
                />
            ))}
        </div>
    )
};

export default CardGrid;