import React, { useState } from 'react';
import './index.css'

function LettersCalculator() {
  const [inputText, setInputText] = useState('');
  const [letterCount, setLetterCount] = useState(0);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);

    const count = text.replace(/[^a-zA-Z]/g, '').length;
    setLetterCount(count);
  };

  return (
    <div className="app-container1">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="phraseText"
                onChange={handleInputChange}
                placeholder="Enter the phrase"
                type="text"
                value={inputText}
              />
            </div>
            <p className="letters-count">No.of letters: {letterCount}</p>
          </div>
          <img
            alt="letters calculator"
            className="letters-calculator-image"
            src="https://freepngimg.com/save/21992-calculator-image/512x512"
          />
        </div>
      </div>
  );
}

export default LettersCalculator;
