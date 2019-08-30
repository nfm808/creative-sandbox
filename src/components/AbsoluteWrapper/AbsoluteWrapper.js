import React from 'react';
import './AbsoluteWrapper.css';

const AbsoluteWrapper = ({ children, className }) => {
  return (
    <div className={`AbsoluteWrapper ${className}`}>
        {children}
    </div>
  )
}

AbsoluteWrapper.defaultProps = {
  className: '',
}

export default AbsoluteWrapper;