import Chessboard from 'chessboardjsx';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Chessboard id="ruyLopez" position={{ d1: "wP", a8: "bP", c8: "bP", e8: "bP", g8: "bP", b7: "bP", d7: "bP", f7: "bP", h7: "bP" }} />
        
  
      </header>
    </div>
  );
}

export default App;
