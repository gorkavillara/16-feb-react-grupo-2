import React from 'react';
import './App.css';
import Concurso from './components/Concurso';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>App React Contest</h1>
      </nav>
      <div>
        <Concurso />
      </div>
    </div>
  );
}

export default App;
