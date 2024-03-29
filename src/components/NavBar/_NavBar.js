import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { useTransition, animated } from 'react-spring';
import Overlay from '../Overlay/Overlay';
import NavMenu from '../NavMenu/NavMenu';
import MdMenu from 'react-icons/lib/md/menu';
import MdClose from 'react-icons/lib/md/close';
import NavMenuTrigger from '../NavMenuTrigger/NavMenuTrigger';

export default function NavBar(props) {
  const size = props.size;
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const {pages} = props;
  const overlayTransitions = useTransition(navMenuOpen, null, {
    from: { opacity: 1,  transform: 'translate(100%, 0)' },
    enter: { opacity: 1,  transform: 'translate(-100%, 0)' },
    leave: { opacity: 1,  transform: 'translate(100%, 0)' },
    unique: true,
  });

  function toggleNavMenu() {
    setNavMenuOpen(!navMenuOpen)
  }

  function renderNav() {
    if (size.width > '767') {
      return (
        <nav>
          <ul className='NavBar--nav'>
            {pages.map((page, i) => (
              <li key={i}><Link to={(page === 'Hire Us') ? 'contact' : page.toLowerCase().split(' ').join('-')}>{page}</Link></li>
            ))}
          </ul>
        </nav>
      )
    } 
    return (
      <NavMenuTrigger cb={toggleNavMenu} >
        {(!navMenuOpen) ? <MdMenu size={20} color="white" /> : <MdClose size={20} color="f7941d"/>}
      </NavMenuTrigger>
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
