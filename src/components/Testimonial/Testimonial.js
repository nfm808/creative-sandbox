import React from 'react';
import './Testimonial.css';
import Divider from '../Divider/Divider';
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left';
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';

const Testimonial = ({id, logo, alt, quote, person, title, industry, plusOne, minusOne, faded}) => {
  if (faded) {
    setTimeout(() => {
      let divs = document.getElementsByClassName('fade')
      for (let x = 0; x < divs.length; x++) {
        divs[x].classList.remove('fade-out')
      }
    }, 500);
  }
  function addFadeOutClass (cb, id) {
    let divs = document.getElementsByClassName('fade')
    for (let x = 0; x < divs.length; x++) {
      divs[x].classList.add("fade-out")
    }
    setTimeout(() => {
      cb(id)
    }, 500);
  }

  return (
    <section className="Testimonial--item" key={id} >
      <img className="Testimonial--img fade" src={logo} alt={alt + ' logo'} />
      <h4 className="Testimonial--quote fade">"{quote}"</h4>
      <Divider className="fade" width={'10%'}/>
      <h5 className="Testimonial--person fade">{person} : {title}</h5>
      <h6 className="Testimonial--industry fade">Industry: {industry}</h6>
      <div className="Testimonial--button-wrapper">
        <button className="Testimonial--button" role='navigation' onClick={() => addFadeOutClass(minusOne)}>
          <MdKeyboardArrowLeft color="f7941d" size={20} />
        </button>
        <button className="Testimonial--button" role="navigation" onClick={() => addFadeOutClass(plusOne)}>
          <MdKeyboardArrowRight color="f7941d" size={20} />
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