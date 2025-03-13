import React, { useState } from 'react';
import './PlayerSelection.css';

const PlayerSelection = ({ onPlayersSelected }) => {
  const [parent, setParent] = useState('Parent');
  const [child, setChild] = useState('Aiden');
  const [wordSetter, setWordSetter] = useState('parent');

  const handleStartGame = () => {
    if (wordSetter === 'parent') {
      onPlayersSelected(parent, child);
    } else {
      onPlayersSelected(child, parent);
    }
  };

  return (
    <div className="player-selection">
      <h2>Who's Playing?</h2>
      
      <div className="player-inputs">
        <div className="player-input">
          <label>Parent's Name:</label>
          <input 
            type="text" 
            value={parent} 
            onChange={(e) => setParent(e.target.value)}
          />
        </div>
        
        <div className="player-input">
          <label>Child's Name:</label>
          <input 
            type="text" 
            value={child} 
            onChange={(e) => setChild(e.target.value)}
          />
        </div>
      </div>

      <div className="word-setter-selection">
        <h3>Who will set the word?</h3>
        <div className="radio-options">
          <label>
            <input
              type="radio"
              name="wordSetter"
              checked={wordSetter === 'parent'}
              onChange={() => setWordSetter('parent')}
            />
            {parent}
          </label>
          
          <label>
            <input
              type="radio"
              name="wordSetter"
              checked={wordSetter === 'child'}
              onChange={() => setWordSetter('child')}
            />
            {child}
          </label>
        </div>
      </div>

      <button className="start-button" onClick={handleStartGame}>
        Start Game
      </button>
    </div>
  );
};

export default PlayerSelection;
