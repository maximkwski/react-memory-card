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
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const storedScore = localStorage.getItem('score');
  const storedBestScore = localStorage.getItem('bestScore');
  const storedClickedCards = localStorage.getItem('clickedCards');

  useEffect(() => {
    if (storedScore) setScore(JSON.parse(storedScore));
    if (storedBestScore) setBestScore(JSON.parse(storedBestScore));
    if (storedClickedCards) setClickedCards(JSON.parse(storedClickedCards));

    const loadPokemonData = async () => {
      const pokemonData = await fetchMultiplePokemon(12);
      setCards(pokemonData);
    };

    loadPokemonData();

  }, []);

// Save the current game state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
    localStorage.setItem('bestScore', JSON.stringify(bestScore));
    localStorage.setItem('clickedCards', JSON.stringify(clickedCards));
  }, [score, bestScore, clickedCards]);

  const shuffledCards = useShuffle(cards);

  const handleCardClick = (id) => {
    if(clickedCards.includes(id)) {
      if( score > bestScore ) {
        setBestScore(score);
      }
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
        <div className='container row'>
          <h1>Pokemon Memory Game</h1>
          <h3>The goal is to click on each image only once to earn a point.</h3>
        </div>
      </header>
      <Scoreboard score={score} bestScore={bestScore}/>
      {gameOver ? (
        <div className='message'>
          <div className="container row">
            <h2>Game Over!</h2>
            <button onClick={resetGame}>Play Again</button>
          </div>
        </div>
      ) : (
        <CardGrid cards={shuffledCards} onCardClick={handleCardClick} />
      )}
    </div>
  )
}

export default App
