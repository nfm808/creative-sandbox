import React from 'react';

const FormGroup = ({label, type, cb}) => {
  return (
  <div className="Form--group">
    <label htmlFor={type}>{label}</label>
    <input type={type} className="Form--control"
      name={type} id={type} onChange={e => cb(e.target.value)} />
  </div>
  )
}

FormGroup.defaultProps = {
  label: 'Label',
  type: 'text',
  cb: () => {},
}

export default FormGroup;