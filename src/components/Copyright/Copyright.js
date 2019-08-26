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
      <p><span role='img'>©️ </span>Copyright {new Date(Date.now()).toLocaleDateString().split('/')[2]} | {props.company}</p>
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