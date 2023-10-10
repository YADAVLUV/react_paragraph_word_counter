import React, { useState } from 'react';
import './App.css'; // You can style it as needed

function App() {
  const [text, setText] = useState('');
  
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim().split(/\s+/).length;

  return (
    <div className="App">
      <h1>Responsive Word Counter</h1>
      <div className="textarea-container">
        <textarea
          rows="5"
          placeholder="Type your text here..."
          value={text}
          onChange={handleChange}
        ></textarea>
        <div className="word-count">Word Count: {wordCount}</div>
      </div>
    </div>
  );
}

export default App;
