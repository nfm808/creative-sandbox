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
      }
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };
  updateName = (e) => {
    console.log(e);
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} className="Form">
        <div className="Form--group-block">
          <FormGroup 
            type='name'
            label='Name'
            cb={this.updateName}
          />
        <FormGroup 
          type='business'
          label='Business / Organization'
          cb={this.updateBusiness}
        />
        </div>
        <div className='Form--group-block'>
        <FormGroup 
          type='phone'
          label='Phone Number'
          cb={this.updatePhone}
        />
        <FormGroup 
          type='email'
          label='Email'
          cb={this.updateEmail}
        />
        </div>
        <div className="Form--button__group">
          <button type="submit" className="Form--button" disabled={!this.state.formValid}>
              Submit
          </button>
        </div>
      </form >
    )
  }
}

export default Form;
