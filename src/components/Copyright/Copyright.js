import React from 'react';

const Copyright = (props) => {
  const { textAlign, width, padding, color, company } = props;
  return (
    <section style={{ 
                    textAlign: `${textAlign}`, 
                      width: `${width}`, 
                      padding: `${padding}`, 
                      color: `${color}`
                    }}
    >
      <p className="align-center"><span role='img' aria-label='copyright'>©️ </span> {new Date(Date.now()).toLocaleDateString().split('/')[2]} | {company}</p>
    </section>
  )
};

export default Copyright;

Copyright.defaultProps = {
  textAlign: 'center',
  width: '100%',
  padding: '2%',
  color: 'black',
  company: 'Sandbox Creative LLC'
}