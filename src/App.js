import React, { useState } from 'react';
import './App.css';
import HangmanGame from './components/HangmanGame';
import PlayerSelection from './components/PlayerSelection';

function App() {
  const [gameState, setGameState] = useState('select-players');
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [wordSetter, setWordSetter] = useState('');
  const [wordGuesser, setWordGuesser] = useState('');

  const handlePlayerSelect = (setterName, guesserName) => {
    setWordSetter(setterName);
    setWordGuesser(guesserName);
    setCurrentPlayer(setterName);
    setGameState('playing');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hangman Game</h1>
        <h2>Let's play together!</h2>
      </header>
      <main>
        {gameState === 'select-players' && (
          <PlayerSelection onPlayersSelected={handlePlayerSelect} />
        )}
        {gameState === 'playing' && (
          <HangmanGame 
            wordSetter={wordSetter} 
            wordGuesser={wordGuesser}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
          />
        )}
      </main>
    </div>
  );
}

export default App;
