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
        <CheckBox cb={this.toggleCheck} list={Object.keys(serviceList)}/>
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
