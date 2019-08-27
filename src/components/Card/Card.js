import React from 'react';
import './Card.css';


const Card = (props) => {
  const { heading, text, classText } = props
  return (
    <section className='Card' >
      {props.children}
      <h2 className={classText}>{heading}</h2>
      <p>{text}</p>
    </section>
  )

}

Card.defaultProps = {
  heading: 'SOME ITEM',
  text: 'This is a sample test to show how awesome this part is',
}

export default Card;
