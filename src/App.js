import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar 
        pages={['About Us', 'Our Work', 'Contact', 'Blog']}
      />
    </div>
  );
}

export default App;
