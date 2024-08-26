import React from "react";
import Card from './Card';

const CardGrid = ({ cards, onCardClick }) => {
    return (
        <div className="card-grid">
            <div className="container row">
                {cards.map(card => (
                    <Card 
                        key={card.id}
                        card={card}
                        onClick={() => onCardClick(card.id)}
                    />
                ))}
            </div>
        </div>
    )
};

export default CardGrid;