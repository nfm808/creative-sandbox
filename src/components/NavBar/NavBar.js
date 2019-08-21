import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import useWindowSize from '../../hooks/useWindowSize';
import { useTransition, animated } from 'react-spring';
import Overlay from '../Overlay/Overlay';
import NavMenu from '../NavMenu/NavMenu';
import MdMenu from 'react-icons/lib/md/menu';
import MdClose from 'react-icons/lib/md/close';

export default function NavBar(props) {
  const size = useWindowSize();
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const {pages} = props;
  const [showNavMenu, setShowNavMenu] = useState(false);
  const overlayTransitions = useTransition(showNavMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  const navMenuTransitions = useTransition(showNavMenu, null, {
    from: { transform: 'translate3d(40%, 100%, 0' },
    enter: { transform: 'translate3d(0, 0, 0)' },
    leave: { transform: 'translate3d(40%, 100%, 0)' }
  });


  function toggleNavMenu() {
    if (!navMenuOpen) {
      setShowNavMenu(true);  
      setNavMenuOpen(true);
    }
    if(navMenuOpen) {
      setShowNavMenu(false);
      setTimeout(() => {
        setNavMenuOpen(false)
      }, 800);  
    }
  }

  function renderNav() {
    if (size.width > '767') {
      return (
        <nav>
          <ul className='NavBar--nav'>
            {pages.map((page, i) => (
              <li key={i}><Link to={page.toLowerCase().split(' ').join('-')}>{page}</Link></li>
            ))}
          </ul>
        </nav>
      )
    } 
    if (navMenuOpen) { return (
      <button aria-label="Open the navigation menu" className='NavBar--button' type='button' onClick={() => toggleNavMenu() }>
          <MdClose size={20} color="f7941d"/>
      </button>
    )}
    return (
      <button aria-label="Open the navigation menu" className='NavBar--button' type='button' onClick={() => toggleNavMenu() }>
        <MdMenu size={20} color="white" />
      </button>
    )
  }

  function renderNavMenu() {
    return (
      <>
        {overlayTransitions.map(({ item, key, props }) => item &&
          <animated.div
            key={key}
            style={props}
          >        
            <Overlay clickClose={toggleNavMenu} />
          </animated.div>
        )}
        {navMenuTransitions.map(({ item, key, props }) => item &&
          <animated.div 
            key={key}
            style={props}
          >
            <NavMenu 
              pages={pages} 
              clickClose={toggleNavMenu}
            />
          </animated.div>
        )}
      </>
    )
  };
  return (
    <>
      <header className='NavBar'>
        <div className='NavBar--logo'>
          <Link onClick={() => navMenuOpen && toggleNavMenu()} to='/'><span className='orange'>Sandbox</span>Creative</Link>
        </div>
        {renderNav()}
      </header>
      {(navMenuOpen && size.width < '769' )&& renderNavMenu()}
    </>
  )
}
