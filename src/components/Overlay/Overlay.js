import React from 'react';
import './Overlay.css';

export default function Overlay(props) {
  function renderShade() {
    return props.light ? 'rgba(255, 255, 255, 0.815)'
          : 'rgba(0, 0, 0, 0.603)'
  }
  function exit() {
    props.clickClose()
  }
  return ( 
      <div 
        onClick={() => exit()}
        className="Overlay"
        style={{background: `${renderShade()}`, zIndex: 4}}
      >
        {props.children}
      </div>
  )
}
