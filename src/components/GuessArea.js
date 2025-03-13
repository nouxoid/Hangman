import React from 'react';
import './GuessArea.css';

const GuessArea = ({ secretWord, guessedLetters, onLetterGuess }) => {
  const word = secretWord.toUpperCase();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  // Render each letter of the word as either visible or hidden
  const renderWord = () => {
    return (
      <div className="word-display">
        {word.split('').map((letter, index) => {
          if (letter === ' ') {
            return <div key={index} className="word-space"></div>;
          }
          
          const isGuessed = guessedLetters.includes(letter.toLowerCase());
          return (
            <div key={index} className="word-letter">
              {isGuessed ? letter : '_'}
            </div>
          );
        })}
      </div>
    );
  };
  
  // Render the alphabet for letter selection
  const renderAlphabet = () => {
    return (
      <div className="alphabet">
        {alphabet.map((letter) => {
          const isGuessed = guessedLetters.includes(letter.toLowerCase());
          const isCorrect = word.includes(letter) && isGuessed;
          
          let buttonClass = 'letter-button';
          if (isGuessed) {
            buttonClass += isCorrect ? ' correct' : ' incorrect';
          }
          
          return (
            <button
              key={letter}
              className={buttonClass}
              onClick={() => onLetterGuess(letter.toLowerCase())}
              disabled={isGuessed}
            >
              {letter}
            </button>
          );
        })}
      </div>
    );
  };
  
  return (
    <div className="guess-area">
      {renderWord()}
      <div className="letter-selection">
        <h3>Pick a letter:</h3>
        {renderAlphabet()}
      </div>
    </div>
  );
};

export default GuessArea;
