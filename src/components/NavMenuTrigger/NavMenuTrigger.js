import React from 'react';
import './NavMenuTrigger.css';

const NavMenuTrigger = ({cb, children}) => {
    return (
      <button 
        onClick={cb} 
        aria-label="Open the navigation menu" 
        className='NavBar--button' 
        type='button'
      >
          {children}
      </button>
    )
}

export default NavMenuTrigger;