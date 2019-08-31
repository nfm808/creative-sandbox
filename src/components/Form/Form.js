import React, { Component } from 'react';
import './Form.css';
import FormGroup from '../FormGroup/FormGroup';

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       business: '',
       phone: '',
       email: '',
       phoneValid: false,
       emailValid: false,
       formValid: false,
       validationMessages: {
         name: '',
         password: '',
         repeatPassword: ''
      },
      serviceList: []
    }
  }
  componentDidMount() {
    const serviceList = [
      'Website', 'Web Application', 'UX or UI Design', 
      'Enterprise Tools', 'Development', 'iOS Application', 
      'Android Application', 'Content Creation', 'Digital Marketing',
      'Other'
    ];
    this.setState({serviceList});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };
  updateName = (e) => {
    console.log(e);
  }
  render() {
    const { serviceList } = this.state;
    return (
      <form onSubmit={e => this.handleSubmit(e)} className="Form">
        <div className="Form--group-block">
          <FormGroup 
            type='name'
            label='Name'
            cb={this.updateName}
          />
          <FormGroup 
            type='phone'
            label='Phone Number'
            cb={this.updatePhone}
          />
        </div>
        <div className='Form--group-block'>
          <FormGroup 
            type='business'
            label='Business / Organization'
            cb={this.updateBusiness}
          />
          <FormGroup 
            type='email'
            label='Email'
            cb={this.updateEmail}
          />
        </div >
        <div className='Form--full-width-container-checkbox'>
          <div className='Form--group-block-checkbox'>
            {serviceList.slice(0, 5).map((service, i) => 
              <div className='Form--checkbox-group'>
                <input className='Form--control Form--checkbox' key={i} type='checkbox' name={'service' + i} value={service} />
                <label htmlFor={'service' + i}>{service}</label>
              </div>
            )}
          </div>
          <div className='Form--group-block-checkbox'>
            {serviceList.slice(5, serviceList.length).map((service, i) =>
              <div className='Form--checkbox-group'>
                <input className='Form--control Form--checkbox' key={i} type='checkbox' name={'service' + i} value={service} />
                <label htmlFor={'service' + i}>{service}</label>
              </div>  
            )}
          </div>
        </div>
        <div className='Form--full-width-container'>
          <button type="submit" className="Form--button" disabled={!this.state.formValid}>
              Submit
          </button>
        </div>
      </form >
    )
  }
}

export default Form;
