import React from 'react';
import './Hero.css';

const Hero = (props) => {
  const { classText, heading, text, imgSrcUrl, height} = props
  return (
    <div 
      className={`Hero ${classText}`}
      style={{ 
        backgroundImage: `url(${imgSrcUrl})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: height
      }} 
    >
        <section className="Hero--text">
          <h1>{heading}</h1>
          <p>{text}</p>
        </section>
    </div>
  )
};

Hero.defaultProps = {
  classText: '',
  heading: '',
  text: '',
  imgSrcUrl: '',
  height: '100vh'
}

export default Hero;