import React, {useState} from 'react';
import Divider from '../Divider/Divider';
import './Card.css';


const Card = (props) => {
  const [show, setShow] = useState(false)
  const { heading, text, classText, children } = props
  function setState(bool) {
    setShow(bool)
  }
  return (
    <li onMouseEnter={() => setState(true)} onMouseLeave={() => setShow(false)} className={show? 'background-change Card' : 'Card'} >
      {children}
      <h2 onMouseEnter={() => setState(true) } onMouseLeave={() => setShow(false)} className={!show ? classText : 'orange' }>{heading}</h2>
      <div onMouseEnter={() => setState(true) } onMouseLeave={() => setState(false)} className="Card--divider-container">
        <Divider onMouseEnter={() => setState(true) } onMouseLeave={() => setState(false)} width="10%" border={show && '1px solid white'}/>
      </div>
      <p onMouseEnter={() => setState(true) } onMouseLeave={() => setShow(false)} className={show ? "Card--p" : "Card--hidden"} >{text}</p>  
    </li>
  )

}

Card.defaultProps = {
  heading: 'SOME ITEM',
  text: 'This is a sample test to show how awesome this part is',
  classText: '',
}

export default Card;
