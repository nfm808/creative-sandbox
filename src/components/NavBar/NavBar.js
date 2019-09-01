import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Transition, animated} from 'react-spring/renderprops';
import './NavBar.css';
import Overlay from '../Overlay/Overlay';
import NavMenu from '../NavMenu/NavMenu';
import MdMenu from 'react-icons/lib/md/menu';
import MdClose from 'react-icons/lib/md/close';
import NavMenuTrigger from '../NavMenuTrigger/NavMenuTrigger';


class NavBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       navMenuOpen: false
    }
    this.toggleNavMenu = this.toggleNavMenu.bind(this)
    this.renderNav = this.renderNav.bind(this)
    this.renderNavMenu = this.renderNavMenu.bind(this)
  }

  toggleNavMenu() {
    this.setState({
      navMenuOpen: !this.state.navMenuOpen
    })
    
  }

  renderNav() {
    if (this.props.size.width > '767') {
      return (
        <nav>
          <ul className='NavBar--nav'>
            {this.props.pages.map((page, i) => (
              <li key={i}><Link to={(page === 'Hire Us') ? 'contact' : page.toLowerCase().split(' ').join('-')}>{page}</Link></li>
            ))}
          </ul>
        </nav>
      )
    } 
    return (
      <NavMenuTrigger cb={this.toggleNavMenu} >
        {(!this.state.navMenuOpen) ? <MdMenu size={20} color="white" /> : <MdClose size={20} color="f7941d"/>}
      </NavMenuTrigger>
    )          
  }

  renderNavMenu() {
    const { navMenuOpen } = this.state;
    return (
      <>
          <Transition
            native
            reset
            unique
            items={navMenuOpen}
            from={{ opacity: 1,  transform: 'translate(100%, 0)' }}
            enter={{ opacity: 1,  transform: 'translate(-100%, 0)' }}
            leave={{ opacity: 1,  transform: 'translate(100%, 0)' }}
          > 
          {navMenuOpen => 
             navMenuOpen && (props =>  
            <animated.div 
              style={{...props, position: 'absolute', background: 'transparent', minHeight: '100vh', minWidth: '100vw', zIndex: '3'}}
            >    
              <Overlay clickClose={this.toggleNavMenu} >
              </Overlay>
              <NavMenu 
                pages={this.props.pages} 
                clickClose={this.toggleNavMenu}
              />
            </animated.div>
          )}
          </Transition>
      </>
    )
  };
  
  render() {
    const {size} = this.props
    const {navMenuOpen} = this.state
    return (
      <>
        <header className='NavBar'>
          <div className='NavBar--logo'>
            <Link onClick={() => navMenuOpen && this.toggleNavMenu()} to='/'><span className='orange'>Sandbox</span>Creative</Link>
          </div>
          {this.renderNav()}
        </header>
        {(size.width < '769' )&& this.renderNavMenu()}
      </>
    )
  }
}

export default NavBar;