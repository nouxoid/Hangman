import React, { useState, useEffect } from 'react';
import WordInput from './WordInput';
import GuessArea from './GuessArea';
import HangmanDrawing from './HangmanDrawing';
import './HangmanGame.css';

const HangmanGame = ({ wordSetter, wordGuesser, currentPlayer, setCurrentPlayer }) => {
  const [secretWord, setSecretWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState('setting-word');
  const maxIncorrectGuesses = 6;
  
  useEffect(() => {
    // Check if the game is won
    if (secretWord && gameStatus === 'guessing') {
      const wordLetters = secretWord.toLowerCase().split('').filter(l => l !== ' ');
      const uniqueWordLetters = [...new Set(wordLetters)];
      const guessedWordLetters = uniqueWordLetters.filter(l => 
        guessedLetters.includes(l.toLowerCase())
      );
      
      if (guessedWordLetters.length === uniqueWordLetters.length) {
        setGameStatus('won');
      }
    }
  }, [secretWord, guessedLetters, gameStatus]);
  
  const handleWordSet = (word) => {
    setSecretWord(word);
    setGameStatus('guessing');
    setCurrentPlayer(wordGuesser);
  };
  
  const handleLetterGuess = (letter) => {
    if (guessedLetters.includes(letter)) return;
    
    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);
    
    if (!secretWord.toLowerCase().includes(letter)) {
      const newIncorrectGuesses = incorrectGuesses + 1;
      setIncorrectGuesses(newIncorrectGuesses);
      
      if (newIncorrectGuesses >= maxIncorrectGuesses) {
        setGameStatus('lost');
      }
    }
  };
  
  const resetGame = () => {
    setSecretWord('');
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameStatus('setting-word');
    setCurrentPlayer(wordSetter);
  };
  
  const renderGameContent = () => {
    switch (gameStatus) {
      case 'setting-word':
        return <WordInput onWordSet={handleWordSet} wordSetter={wordSetter} />;
      
      case 'guessing':
        return (
          <>
            <div className="game-info">
              <h3>It's {currentPlayer}'s turn to guess!</h3>
              <p>Incorrect guesses: {incorrectGuesses} of {maxIncorrectGuesses}</p>
            </div>
            <HangmanDrawing incorrectGuesses={incorrectGuesses} />
            <GuessArea 
              secretWord={secretWord}
              guessedLetters={guessedLetters}
              onLetterGuess={handleLetterGuess}
            />
          </>
        );
      
      case 'won':
        return (
          <div className="game-result win">
            <h2>🎉 Hooray! {wordGuesser} won! 🎉</h2>
            <p>The word was: <strong>{secretWord}</strong></p>
            <button onClick={resetGame} className="play-again-button">Play Again!</button>
          </div>
        );
      
      case 'lost':
        return (
          <div className="game-result lose">
            <HangmanDrawing incorrectGuesses={incorrectGuesses} />
            <h2>Game Over!</h2>
            <p>The word was: <strong>{secretWord}</strong></p>
            <button onClick={resetGame} className="play-again-button">Play Again!</button>
          </div>
        );
      
      default:
        return <div>Something went wrong!</div>;
    }
  };
  
  return (
    <div className="hangman-game">
      {renderGameContent()}
    </div>
  );
};

export default HangmanGame;
