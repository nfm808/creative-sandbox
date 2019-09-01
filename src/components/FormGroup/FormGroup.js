import React from 'react';

const FormGroup = ({label, type, cb, wide}) => {
  return (
  <div className="Form--group">
    <label htmlFor={type}>{label}</label>
    <input type={type} className={!wide ? "Form--control" : "Form--control Form--control-wide"}
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