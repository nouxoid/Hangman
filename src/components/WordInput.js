import React, { useState } from 'react';
import './WordInput.css';

const WordInput = ({ onWordSet, wordSetter }) => {
  const [word, setWord] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the word is valid
    if (!word.trim()) {
      setError('Please enter a word');
      return;
    }
    
    // Check if the word only contains letters and spaces
    if (!/^[A-Za-z\s]+$/.test(word)) {
      setError('The word can only contain letters and spaces');
      return;
    }
    
    onWordSet(word.trim());
  };

  return (
    <div className="word-input">
      <h2>{wordSetter}'s Turn</h2>
      <p className="instruction">Enter a word for the other player to guess.</p>
      <p className="privacy-note">(Make sure they're not peeking! 👀)</p>
      
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="secret-word">Secret Word:</label>
          <input
            id="secret-word"
            type="text"
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
              setError('');
            }}
            autoFocus
            placeholder="Type a word here"
          />
        </div>
        
        {error && <p className="error-message">{error}</p>}
        
        <button type="submit" className="set-word-button">
          Set Word
        </button>
      </form>
    </div>
  );
};

export default WordInput;
