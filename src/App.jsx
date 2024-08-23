import { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import CardGrid from './components/CardGrid';
import useShuffle from './hooks/useShuffle';

import './App.css'

function App() {
  const initialCards = [];
  const [cards, setCards] = useState(initialCards);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const shuffledCards = useShuffle(cards);

  // const handleCardClick = (id) => {
  //   if(clickedCards.includes(id)) {
  //     //game over logic here
  //   } else {
  //     setClickedCards([...clickedCards, id]);
  //     setScore(score + 1);
  //     setCards(shuffledCards);
  //   }
  // }

  return (
    <div className="app">
      <header>
        <h1>Pokemon Memory Game</h1>
        <h2>The goal is to click on each image only once to earn a point.</h2>
      </header>
      {/* <Scoreboard score={score} />
      <CardGrid cards={shuffleCards} onCardClick={handleCardClick} /> */}
    </div>
  )
}

export default App
