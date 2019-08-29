import React from 'react';
import './Values.css';

const Values = (props) => {
  
  return (
    <ul className='Values'>
      {props.children}
    </ul>
  )
};

export default Values;