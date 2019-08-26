import React, { useContext } from 'react';
import SizeContext from '../../SizeContext';
import './Home.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import bg8 from '../../assets/img/bg8.jpg';
import AbsoluteWrapper from '../AbsoluteWrapper/AbsoluteWrapper';
import Copyright from '../Copyright/Copyright';


export default function Home() {
  const size = useContext(SizeContext)
  return (
    <AbsoluteWrapper className='Home'>
      <Parallax pages={2} style={{zIndex: '1'}}>
        <ParallaxLayer 
          factor={.95}
          style={{ 
            backgroundImage: `url(${bg8})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            filter: 'blur(3px) brightness(60%)',
          }} 
        >
        </ParallaxLayer>
        <ParallaxLayer
          factor={1}
          offset={0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex:'2' 
          }}
        >
          <section style={{ textAlign: 'left', width: '100%', padding: '2%', color: 'white', zIndex: '1'}}>
            <h1>We Architect<br/> <span className='orange'>Business</span> Solutions</h1>
            <button>Master Classes</button>
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          factor={.25}
          offset={1.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex:'2' 
          }}
        >
          <section style={{ textAlign: 'center', width: '100%', padding: '2%', color: 'black', zIndex: '1'}}>
            <h2>Our <span className='blue'>Focus</span> is your <span className='orange'>Success</span>.</h2>
          </section>
        </ParallaxLayer>
        <ParallaxLayer 
          factor={.87}
          offset={1.02}
          speed={1.75}
          style={{zIndex:'2'}}
        >
          <section style={{height: '100%', width: '98%', background: '#ffffff', margin: '0 auto', borderRadius: '4px', boxShadow: '0px 3px 6px #0a2c469d', zIndex: '3' }} >
            
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          factor={.1}
          offset={(size.width < 1150) ? 1.889 : 1.867}
        >
          <Copyright />
        </ParallaxLayer>
      </Parallax>
    </AbsoluteWrapper>
  )
}
