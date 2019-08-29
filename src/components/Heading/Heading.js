import React from 'react';
import './Heading.css';

const Heading = (props) => {
  return <h2 className="Heading">{props.heading}</h2>
}

Heading.defaultProps = {
  heading: 'This is a heading'
}

export default Heading;