// src/Cards.js
import React from 'react';

const Cards = ({ data, onCardClick }) => {
    return (
        <div className="card-container">
            {data.map((card) => (
                <div key={card.id} className="card" onClick={() => onCardClick(card.title)}>
                    {}
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;
