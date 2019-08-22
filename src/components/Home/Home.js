import React from 'react';
import './Home.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import bg8 from '../../assets/img/bg8.jpg';
import AbsoluteWrapper from '../AbsoluteWrapper/AbsoluteWrapper';


export default function Home() {
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
            <h1>We Architect <span className='orange'>Business</span> Solutions</h1>
            <button>Master Classes</button>
          </section>
        </ParallaxLayer>
        <ParallaxLayer 
          factor={.89}
          offset={1}
          speed={1.75}
          zIndex='2'
        >
          <section style={{height: '100%', width: '96%', background: '#ffffff', margin: '0 auto', borderRadius: '4px', boxShadow: '0px 3px 6px #0a2c469d', zIndex: '3' }} />
        </ParallaxLayer>
      </Parallax>
    </AbsoluteWrapper>
  )
}
