import React from 'react';
import './NavMenuTrigger.css';
import MdMenu from 'react-icons/lib/md/menu';
import MdClose from 'react-icons/lib/md/close';


const NavMenuTrigger = ({cb, open}) => {
    return (
      <button 
        onClick={cb} 
        aria-label="Open the navigation menu" 
        className='NavBar--button' 
        type='button'
      >
          {!open ? <MdMenu size={20} color="white" /> : <MdClose size={20} color="f7941d"/>}
      </button>
    )
}

export default NavMenuTrigger;