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
import Testimonial from '../Testimonial/Testimonial';
import SizeContext from '../../SizeContext';




 class Home extends React.Component {
  static contextType = SizeContext
  constructor(props) {
    super(props)
  
    this.state = {
      index: 0,
      isFaded: false,
      testimonials: null
    }
  }
  
  componentDidMount() {
    const testimonials = [
      {
        id: 0,
        logo: 'https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max',
        alt: 'business',
        quote: 'This was a great way to work and develop my dream app.',
        person: 'John Wilkes Boothe',
        title: 'hitman',
        industry: 'killin'
      },
      {
        id: 1,
        logo: 'https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max',
        alt: 'business2',
        quote: 'They did amazing work keeping things super fresh.',
        person: 'person 2',
        title: 'testposition2',
        industry: 'test2'
      },
      {
        id: 2,
        logo: 'https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max',
        alt: 'business3',
        quote: 'test quote 3',
        person: 'person 3',
        title: 'testposition 3',
        industy: 'test3'
      }
    ]
    this.setState({
      testimonials: testimonials
    })
  }
  indexPlusOne = () => {
    const {testimonials, index} = this.state
    let newIndex;
    let faded = true
    if (index === testimonials.length -1) {
      newIndex = 0
    } else {
      newIndex = index + 1
    }
    this.setState({
      index: newIndex,
      isFaded: faded
    })
  }

  indexMinusOne = () => {
    const {testimonials, index} = this.state
    let newIndex;
    let faded = true
    if (index === 0) {
      newIndex = testimonials.length - 1
    } else {
      newIndex = index -1 
    }
    this.setState({
      index: newIndex,
      isFaded: faded
    })
  }
  render() {
  const {history} = this.props
  const { width } = this.context
  const {testimonials, index, isFaded} = this.state
  return (
    <AbsoluteWrapper className='Home'>
      <Parallax className="Scroll-element" pages={(width > 1399) ? 1.9 :2.4} style={{zIndex: '1'}}>
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
            <h4>Strategy | Design | Development</h4>
            <button className='button' onClick={() => history.push('/contact')}>Work With Us</button>
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          factor={.25}
          offset={.96}
          speed={ (width > 1399) ? -.3 : -.21}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex:'2' 
          }}
        >
          <section className="Testimonial--container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%', padding: '2%', color: 'black', zIndex: '1'}}>
              {testimonials &&
              <Testimonial 
                logo={testimonials[index].logo}
                alt={testimonials[index].alt}
                quote={testimonials[index].quote}          
                person={testimonials[index].person}
                title={testimonials[index].title}
                industry={testimonials[index].industry}
                plusOne={this.indexPlusOne}
                minusOne={this.indexMinusOne}
                faded={!isFaded ? false : true}
              />}
          </section>
        </ParallaxLayer>
        <ParallaxLayer 
          factor={(width > 1399) ? .75 : 1.87}
          offset={(width > 1399) ? 1 :1.5}
          speed={1.75}
          style={{zIndex:'2'}}
        >
          <ul className='Home--info' >
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
            <div className="Home--button-container">
              <button className='button' role='navigation' aria-label="navigate to about us page" onClick={() => history.push('/about-us')}>Learn More</button>
            </div>
          </ul>
        </ParallaxLayer>
        <ParallaxLayer
          factor={.1}
          offset={(width > 1399) ? 1.8 :2.3}
        >
          <Copyright />
        </ParallaxLayer>
      </Parallax>
    </AbsoluteWrapper>
  )}
}

export default Home;
