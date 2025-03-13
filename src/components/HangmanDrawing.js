import React from 'react';
import './HangmanDrawing.css';

const HangmanDrawing = ({ incorrectGuesses }) => {
  // Draw parts of the hangman based on the number of incorrect guesses
  const renderHangman = () => {
    return (
      <svg className="hangman-svg" viewBox="0 0 200 200">
        {/* Base */}
        <line x1="40" y1="180" x2="160" y2="180" stroke="black" strokeWidth="4" />
        
        {/* Vertical pole */}
        {incorrectGuesses >= 1 && (
          <line x1="60" y1="180" x2="60" y2="20" stroke="black" strokeWidth="4" />
        )}
        
        {/* Horizontal beam */}
        {incorrectGuesses >= 2 && (
          <line x1="60" y1="20" x2="140" y2="20" stroke="black" strokeWidth="4" />
        )}
        
        {/* Rope */}
        {incorrectGuesses >= 3 && (
          <line x1="140" y1="20" x2="140" y2="40" stroke="black" strokeWidth="4" />
        )}
        
        {/* Head */}
        {incorrectGuesses >= 4 && (
          <circle cx="140" cy="55" r="15" stroke="black" strokeWidth="4" fill="white" />
        )}
        
        {/* Body */}
        {incorrectGuesses >= 5 && (
          <line x1="140" y1="70" x2="140" y2="120" stroke="black" strokeWidth="4" />
        )}
        
        {/* Arms and legs */}
        {incorrectGuesses >= 6 && (
          <>
            <line x1="140" y1="80" x2="120" y2="100" stroke="black" strokeWidth="4" />
            <line x1="140" y1="80" x2="160" y2="100" stroke="black" strokeWidth="4" />
            <line x1="140" y1="120" x2="120" y2="150" stroke="black" strokeWidth="4" />
            <line x1="140" y1="120" x2="160" y2="150" stroke="black" strokeWidth="4" />
          </>
        )}
        
        {/* Face - only when game is lost */}
        {incorrectGuesses >= 6 && (
          <>
            <circle cx="135" cy="50" r="2" fill="black" /> {/* Left eye */}
            <circle cx="145" cy="50" r="2" fill="black" /> {/* Right eye */}
            <path d="M130 60 Q140 65 150 60" stroke="black" strokeWidth="2" fill="transparent" /> {/* Frown */}
          </>
        )}
      </svg>
    );
  };

  return (
    <div className="hangman-drawing">
      {renderHangman()}
    </div>
  );
};

export default HangmanDrawing;
