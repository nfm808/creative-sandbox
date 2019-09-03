import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Transition, animated} from 'react-spring/renderprops';
import './NavBar.css';
import Overlay from '../Overlay/Overlay';
import NavMenu from '../NavMenu/NavMenu';
import NavMenuTrigger from '../NavMenuTrigger/NavMenuTrigger';


class NavBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       navMenuOpen: false,
       scrollPos: 0
    }
    this.openNavMenu = this.openNavMenu.bind(this)
    this.closeNavMenu = this.closeNavMenu.bind(this)
    this.renderNav = this.renderNav.bind(this)
    this.renderNavMenu = this.renderNavMenu.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)
  }
  scrollToTop(element) {
    element.scrollTo(0, 0);
  }
  openNavMenu() {
    let body = window.document.getElementsByTagName("body")[0];
    let div = window.document.getElementsByClassName("Scroll-element")[0];
    let isHomePath = (this.props.location.pathname === '/') ? true : false;
    this.setState({
      scrollPos: isHomePath ? div.scrollTop : body.scrollTop,
      navMenuOpen: true
    }, isHomePath ? this.scrollToTop(div) : this.scrollToTop(body))
    body.classList.add("scroll-lock")
  }

  scrollToPrevious(body) {
    if (this.props.location.pathname === '/') {
      let div = window.document.getElementsByClassName("Scroll-element")[0]
      div.scrollTo(0, this.state.scrollPos);
    }
    body.scrollTo(0, this.state.scrollPos);
  }
  closeNavMenu() {
    let body = window.document.getElementsByTagName("body")[0];
    body.classList.remove("scroll-lock");
    this.scrollToPrevious(body);
    this.setState({
      navMenuOpen: false,
      scrollPos: 0
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
      <NavMenuTrigger 
        cb={(!this.state.navMenuOpen)? this.openNavMenu : this.closeNavMenu} 
        open={!this.state.navMenuOpen? false : true}
      >
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
              <Overlay clickClose={(!this.state.navMenuOpen)? this.openNavMenu : this.closeNavMenu} >
              </Overlay>
              <NavMenu 
                pages={this.props.pages} 
                clickClose={(!this.state.navMenuOpen)? this.openNavMenu : this.closeNavMenu}
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
            <Link onClick={() => (navMenuOpen) && this.closeNavMenu()} to='/'><span className='orange'>Sandbox</span>Creative</Link>
          </div>
          {this.renderNav()}
        </header>
        {(size.width < '769' )&& this.renderNavMenu()}
      </>
    )
  }
}

export default NavBar;