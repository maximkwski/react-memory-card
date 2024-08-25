import { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard';
import CardGrid from './components/CardGrid';
import useShuffle from './hooks/useShuffle';
import { fetchMultiplePokemon } from './pokemonService';

import './App.css'

function App() {
  const initialCards = [];
  const [cards, setCards] = useState(initialCards);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const loadPokemonData = async () => {
      const pokemonData = await fetchMultiplePokemon(12);
      setCards(pokemonData);
    };

    loadPokemonData();

  }, []);

  const shuffledCards = useShuffle(cards);

  const handleCardClick = (id) => {
    if(clickedCards.includes(id)) {
      setGameOver(true);
    } else {
      setClickedCards([...clickedCards, id]);
      setScore(score + 1);
      setCards(shuffledCards);
    }
  }

  const resetGame = () => {
    setScore(0);
    setClickedCards([]);
    setGameOver(false);
  }

  return (
    <div className="app">
      <header>
        <h1>Pokemon Memory Game</h1>
        <h2>The goal is to click on each image only once to earn a point.</h2>
      </header>
      <Scoreboard score={score} />
      {gameOver ? (
        <div>
          <h2>Game Over!</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <CardGrid cards={shuffledCards} onCardClick={handleCardClick} />
      )}
    </div>
  )
}

export default App
