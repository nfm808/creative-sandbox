import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  function renderRoutes() { return (
    <>
    {['/', '/About Us', '/Our Work', '/Contact', '/Blog'].map(path => (
      <Route 
        key={path}
        exact
        path={`/${path.toLowerCase().split(' ').join('-')}`}
        component={path.split(' ').join('')}
      />
    ))}
    </>
  )
  }
  return (
    <div className="App">
      <NavBar 
        pages={['About Us', 'Our Work', 'Contact', 'Blog']}
      />
    </div>
  );
}

export default App;
