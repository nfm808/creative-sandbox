import React from 'react';
import './Home.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import bg8 from '../../assets/img/bg8.jpg';
import MdLightbulbOutline from 'react-icons/lib/md/lightbulb-outline';
import MdImportantDevices from 'react-icons/lib/md/important-devices';
import MdTrendingUp from 'react-icons/lib/md/trending-up';
import AbsoluteWrapper from '../AbsoluteWrapper/AbsoluteWrapper';
import Copyright from '../Copyright/Copyright';
import Card from '../Card/Card';



export default function Home(props) {
  const { history } = props
  return (
    <AbsoluteWrapper className='Home'>
      <Parallax pages={2.25} style={{zIndex: '1'}}>
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
          <section style={{ textAlign: 'center', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2%', color: 'white', zIndex: '1'}}>
            <h1>We Architect <span className='orange'>Business</span> Solutions</h1>
            <p>Enterprise & Product Strategy | Design | Development</p>
            <button className='button' onClick={() => history.push('/contact')}>Work With Us</button>
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
          factor={1.87}
          offset={1.02}
          speed={1.75}
          style={{zIndex:'2'}}
        >
          <section className='Home--info' >
            <Card 
              heading='VALIDATE YOUR IDEA'
              text='Develop a solution that maximizes value for your customers and 
              defines your opportunity through user interviews, 
              prototype testing and more.'
              classText='blue'
            >
              <MdLightbulbOutline className='orange' size={80} />
            </Card>
            <Card 
              heading='BUILD YOUR PRODUCT'
              text='Build a reliable product with scalable technology that
                   claims your market share.'
              classText='blue'
            >
              <MdImportantDevices className='orange' size={80} />
            </Card>
            <Card 
              heading='GROW YOUR BUSINESS'
              text='Improve and iterate your product with Lean UX principles
                    and a test driven strategy to create the most value for your customers.'
              classText='blue'
            >
              <MdTrendingUp className='orange' size={80} />
            </Card>
            <button className='button' type='button' role='navigation' onClick={() => history.push('/about-us')}>Learn More</button>
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          factor={.1}
          offset={2.1}
        >
          <Copyright />
        </ParallaxLayer>
      </Parallax>
    </AbsoluteWrapper>
  )
}
