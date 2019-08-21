import React from 'react';
import './Home.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import bg8 from '../../assets/img/bg8.jpg';

export default function Home() {
  return (
    <main className="Home">
      <Parallax pages={3} style={{zIndex: '-10'}}>
        <ParallaxLayer style={{ backgroundImage: `url(${bg8})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(3px) brightness(50%)' }} />
      </Parallax>
    </main>
  )
}
