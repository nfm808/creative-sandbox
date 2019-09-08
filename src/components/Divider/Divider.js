import React from 'react';
import './Divider.css';

const Divider = ({ width, className }) => {
  return <div className={"Divider " + className} style={{width: width}} />
}

Divider.defaultProps = {
  width: '75%'
}
export default Divider;