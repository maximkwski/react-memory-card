import React from 'react';

const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="scoreboard">
      <div className="container row">
        <h2>Score: {score}</h2>
        <h2>Best Score: {bestScore}</h2>
      </div>
    </div>
  );
};

export default Scoreboard;
