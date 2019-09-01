import React, { Component } from 'react';
import './Form.css';
import FormGroup from '../FormGroup/FormGroup';
import CheckBox from '../CheckBox/CheckBox';

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
    const services = [
      'Website', 'Web Application', 'UX or UI Design', 
      'Enterprise Tools', 'Development', 'iOS Application', 
      'Android Application', 'Content Creation', 'Digital Marketing',
      'Other'
    ];
    const serviceList = {}
    function createServiceList() { services.map((service) => 
      serviceList[service] = false
      )
    }
    createServiceList();
    this.setState({serviceList});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };
  updateName = (e) => {
    console.log(e);
  }
  toggleCheck = (e) => {
    const { serviceList } = this.state
    const toggled = !serviceList[e]
    this.setState({
      serviceList: { ...serviceList, [e]: toggled}
    })
  }
  render() {
    const { serviceList } = this.state;
    return (
      <form  onSubmit={e => this.handleSubmit(e)} className="Form">
        <div className="Form--full-width-container">
          <div className="Form--group-block Form--heading">
            <h1 style={{paddingBottom: '1rem'}}>Work With Us</h1>
            <p style={{padding: '1rem'}}>While we are capable of completing any type of project, we don't
              work with everyone. We choose to partner with clients that align
              with our values and will benefit from our expertise. 
            </p>
            <p style={{padding: '.5rem'}}>Fill out the form below to start a conversation with us.</p>
          </div>
        </div>
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
        <div className='Form--full-width-container'>
          <div className="Form--group-block Form--heading">
            <p>What type of project are you looking to partner on?</p>
            <p>(Select all that apply)</p>
          </div>
        </div>
        <CheckBox cb={this.toggleCheck} list={Object.keys(serviceList)}/>
        <div className='Form--group-block'>
          <FormGroup 
            type='text'
            label='Describe your project and business.'
          />
          <FormGroup 
            type='text'
            label='What are your project goals?'
          />
          <FormGroup 
            type='text'
            label='How soon are you looking to launch?'
          />
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
