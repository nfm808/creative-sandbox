import React from 'react';
import './Divider.css';

const Divider = ({ width, className, border }) => {
  return <div className={"Divider " + className} style={{width: width, border: border}} />
}

Divider.defaultProps = {
  width: '75%',
  border: '1px solid #0a2c46'
}
export default Divider;