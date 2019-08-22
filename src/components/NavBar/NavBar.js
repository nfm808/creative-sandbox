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
  const overlayTransitions = useTransition(navMenuOpen, null, {
    from: { opacity: 1,  transform: 'translate(100%, 0)' },
    enter: { opacity: 1,  transform: 'translate(-100%, 0)' },
    leave: { opacity: 1,  transform: 'translate(100%, 0)' }
  });

  function toggleNavMenu() {
    if (!navMenuOpen) {
      setNavMenuOpen(true);
    }
    if(navMenuOpen) {
      setNavMenuOpen(false)
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
            style={{...props, position: 'absolute', background: 'transparent', minHeight: '100vh', minWidth: '100vw', zIndex: '3'}}
          >        
            <Overlay clickClose={toggleNavMenu} >
            </Overlay>
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
      {(size.width < '769' )&& renderNavMenu()}
    </>
  )
}
