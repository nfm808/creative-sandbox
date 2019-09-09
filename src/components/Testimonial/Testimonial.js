import React from 'react';
import './Testimonial.css';
import Divider from '../Divider/Divider';
import MdKeyboardArrowDown from 'react-icons/lib/md/more-horiz';

const Testimonial = ({id, logo, alt, quote, person, title, industry, plusOne, minusOne, faded}) => {
  if (faded) {
    setTimeout(() => {
      let divs = document.getElementsByClassName('fade')
      for (let x = 0; x < divs.length; x++) {
        divs[x].classList.remove( 'transform-x', 'fade-out')
      }
    }, 500);
  }
  function addFadeOutClass (cb, id) {
    let divs = document.getElementsByClassName('fade')
    for (let x = 0; x < divs.length; x++) {
      divs[x].classList.add( "transform-x", 'fade-out' )
    }
    setTimeout(() => {
      cb(id)
    }, 500);
  }

  return (
    <section className="Testimonial" >
      <div className="Testimonial--item" key={id} >
        <img className="Testimonial--img fade transform" src={logo} alt={alt + ' logo'} />
        <h4 className="Testimonial--quote fade transform">"{quote}"</h4>
        <Divider border={'1px solid #f7941d'} className="fade transform" width={'10%'}/>
        <h5 className="Testimonial--person fade transform">{person} : {title}</h5>
        <h6 className="Testimonial--industry fade transform">Industry: {industry}</h6>
        <button className="Testimonial--button" role='navigation' value="left" onClick={(e) => addFadeOutClass(minusOne, e.target.value)}>
          <MdKeyboardArrowDown color="#f7941d" size={20} />
        </button>
      </div>
    </section>
  )
}

Testimonial.defaultProps = {
  id: 0,
  logo: '',
  alt: 'business',
  quote: 'This is a quote often misattributed to Einstein',
  person: 'Albert Einstein',
  title: 'Head Physicist',
  industry: 'Alchemax',
  plusOne: () => {},
  minusOne: () => {}
}

export default Testimonial;