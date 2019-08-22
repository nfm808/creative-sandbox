import React from 'react';
import './AbsoluteWrapper.css';

const AbsoluteWrapper = ({ children, className }) => {
  return (
    <main className={`AbsoluteWrapper ${className}`}>
      {children}
    </main>
  )
}

export default AbsoluteWrapper;