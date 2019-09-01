import React, {useContext} from 'react';
import SizeContext from '../../SizeContext';

const CheckBox = (props) => {
  const { list, cb } = props;
  const size = useContext(SizeContext);

  if (size.width < 490) {
    return (
      <div className='Form--full-width-container-checkbox'>
          <div className='Form--group-block-checkbox'>
            {list.map((service, i) => 
              <div key={i} className='Form--checkbox-group'>
                <input 
                  className='Form--control Form--checkbox' 
                  type='checkbox' 
                  name={'service' + i} 
                  value={service} 
                  onChange={(e) => cb(e.target.value)}  
                />
                <label htmlFor={'service' + i}>{service}</label>
              </div>
            )}
          </div>
      </div>
    )
  } 
  return (
    <div className='Form--full-width-container-checkbox'>
          <div className='Form--group-block-checkbox'>
            {list.slice(0, 5).map((service, i) => 
              <div key={i} className='Form--checkbox-group'>
                <input 
                  className='Form--control Form--checkbox' 
                  type='checkbox' 
                  name={'service' + i} 
                  value={service} 
                  onChange={(e) => cb(e.target.value)}  
                />
                <label htmlFor={'service' + i}>{service}</label>
              </div>
            )}
          </div>
          <div className='Form--group-block-checkbox'>
            {list.slice(5, list.length).map((service, i) =>
              <div key={i} className='Form--checkbox-group'>
                <input 
                  onChange={(e) => cb(e.target.value)} 
                  className='Form--control Form--checkbox' 
                  key={i} 
                  type='checkbox' 
                  name={'service' + i} 
                  value={service} 
                />
                <label htmlFor={'service' + i}>{service}</label>
              </div>  
            )}
          </div>
        </div>
  )
}

export default CheckBox;