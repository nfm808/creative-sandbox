import React, { useState } from 'react';
import './Slider.css';

const Slider = (props) => {
  const [current, setCurrent] = useState();

  return (
    <div className="Slider">
      {props.children}
    </div>
  )
};

export default Slider;