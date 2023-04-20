import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleButtonClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>Background Color App</h1>
      <div className="button-container">
        <button onClick={() => handleButtonClick('red')}>Red</button>
        <button onClick={() => handleButtonClick('green')}>Green</button>
        <button onClick={() => handleButtonClick('blue')}>Blue</button>
      </div>
    </div>
  );
}

export default App;
