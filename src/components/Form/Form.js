import React, { Component } from 'react';
import './Form.css';
import FormGroup from '../FormGroup/FormGroup';
import CheckBox from '../CheckBox/CheckBox';
import ValidationError from '../ValidationError/ValidationError';

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       business: '',
       phone: '',
       email: '',
       projectDescription: '',
       projectGoals: '',
       projectTimeline: '',
       nameValid: false,
       businessValid: false,
       phoneValid: false,
       emailValid: false,
       serviceListValid: false,
       formValid: false,
       projectDescriptionValid: false,
       projectGoalsValid: false,
       projectTimelineValid: false,
       projectTypeValid: false,
       isSubmitted: false,
       validationMessages: {
        name: '',
        phone: '',
        business: '',
        email: '',
        projectDescription: '',
        projectGoals: '',
        projectTimeline: '',
        serviceList: '',
        isSubmitted: ''
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
    console.log('submitted')
    // insert a post call to inquiry endpoint here
    this.setState({
      isSubmitted: true,
      validationMessages: {
        ...this.state.validationMessages,
        isSubmitted: 'Mahalo! We will be in contact within 3 days.'
      }
    })
  };
  updateName = (e) => {
    this.setState({
      name: e
    }, this.validateName(e))
  }
  validateName = (e) => {
    let err = false;
    let msg;
    if (e.length < 1 || e.length > 72) {
      msg = 'Required Field'
    }
    else {
      err = !err
      msg = ''
    }
    this.setState({
      nameValid: err,
      validationMessages: {
        ...this.state.validationMessages,
        name: msg
      }
    }, () => this.formValid())
  }
  updateBusiness = (e) => {
    this.setState({
      business: e
    }, this.validateBusiness(e))
  }
  validateBusiness = (e) => {
    let err = false;
    let msg;
    if (e.length < 1 || e.length > 72) {
      msg = 'Required Field'
    }
    else {
      err = !err
      msg = ''
    }
    this.setState({
      businessValid: err,
      validationMessages: {
        ...this.state.validationMessages,
        business: msg
      }
    }, () => this.formValid())
  }
  updatePhone = (e) => {
    this.setState({
      phone: e,
    }, this.validatePhone(e))
  }
  validatePhone = (e) => {
      let phoneno = /^\d{10}$/;
      let msg;
      let err = false;
      if(!e.match(phoneno)) {
        msg = 'Insert Valid Phone Number';
      }
      else {
        msg = '';
        err = !err
      }
      this.setState({
        phoneValid: err,
        validationMessages: {
          ...this.state.validationMessages,
          phone: msg
        }
      }, () => this.formValid())
  }
  updateEmail = (e) => {
    this.setState({
      email: e,
    }, this.validateEmail(e))
  }
  validateEmail = (e) => {
    let msg;
    let err = false
    let mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,18})+$/;
    if (!e.match(mailFormat)) {
      msg = 'Valid Email Required';
    } else {
      msg = ''
      err = !err
    }
    this.setState({
      emailValid: err,
      validationMessages: {
        ...this.state.validationMessages,
        email: msg
      }
    }, () => this.formValid())
  }
  updateProjectDescription = (e) => {
    this.setState({
      projectDescription: e
    }, this.validateProjectDescription(e))
  }
  validateProjectDescription = (e) => {
    let msg;
    let err = false
    if (e.length < 1) {
      msg = 'Required Field'
    } else {
      msg = ''
      err = !err
    }
    this.setState({
      projectDescriptionValid: err,
      validationMessages: {
        ...this.state.validationMessages,
        projectDescription: msg
      }
    }, () => this.formValid())
  }
  updateProjectGoals = (e) => {
    this.setState({
      projectGoals: e
    }, this.validateProjectGoals(e))
  }
  validateProjectGoals = (e) => {
    let msg;
    let err = false
    if (e.length < 1) {
      msg = 'Required Field'
    } else {
      msg = ''
      err = !err
    }
    this.setState({
      projectGoalsValid: err,
      validationMessages: {
        ...this.state.validationMessages,
        projectGoals: msg
      }
    }, () => this.formValid())
  }
  updateProjectTimeline = (e) => {
    this.setState({
      projectTimeline: e
    }, this.validateProjectTimeline(e))
  }
  validateProjectTimeline = (e) => {
    let msg;
    let err = false
    if (e.length < 1) {
      msg = 'Required Field'
    } else {
      msg = ''
      err = !err
    }
    this.setState({
      projectTimelineValid: err,
      validationMessages: {
        ...this.state.validationMessages,
        projectTimeline: msg
      }
    }, () => this.formValid())
  }
  formValid = () => {
    const { 
      nameValid, businessValid, 
      phoneValid, emailValid,
      projectDescriptionValid, projectGoalsValid,
      projectTimelineValid, projectTypeValid,  
    } = this.state
    if (nameValid && businessValid && phoneValid && emailValid 
      && projectDescriptionValid && projectGoalsValid 
      && projectTimelineValid && projectTypeValid ) {
        this.setState({
          formValid: true
        })
    }
  }
  toggleServiceListCheck = (e) => {
    const { serviceList } = this.state
    const toggled = (serviceList[e] ===false) ? true : false;
    this.setState({
      serviceList: { ...serviceList, [e]: toggled}
    },() => this.validateServiceList())
  }
  validateServiceList = () => {
    let msg;
    let err = false
    let serviceListHasSelection = Object.values(this.state.serviceList).includes(true)
    if (!serviceListHasSelection) {
      msg = 'Please Make a Selection'
    } else {
      msg = ''
      err = !err
    }
    this.setState({
      projectTypeValid: err,
      validationMessages: {
        ...this.state.validationMessages,
        serviceList: msg
      }
    }, () => this.formValid())
  }
  render() {
    const { 
      serviceList, nameValid, phoneValid, 
      emailValid, businessValid, 
      projectDescriptionValid, projectGoalsValid, isSubmitted,
      projectTimelineValid, projectTypeValid, validationMessages } = this.state;
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
          >
            <ValidationError hasError={!nameValid} message={validationMessages.name} />
          </FormGroup>
          <FormGroup 
            type='tel'
            label='Phone Number'
            cb={this.updatePhone}
          >
            <ValidationError hasError={!phoneValid} message={validationMessages.phone} />
          </FormGroup>
        </div>
        <div className='Form--group-block'>
          <FormGroup 
            type='business'
            label='Business / Organization'
            cb={this.updateBusiness}
          >
            <ValidationError hasError={!businessValid} message={validationMessages.business} />
          </FormGroup>
          <FormGroup 
            type='email'
            label='Email'
            cb={this.updateEmail}
          >
            <ValidationError hasError={!emailValid} message={validationMessages.email} />
          </FormGroup>
        </div >
        <div className='Form--full-width-container'>
          <div className="Form--group-block Form--heading">
            <p>What type of project are you looking to partner on?</p>
            <p>(Select all that apply)</p>
            <ValidationError hasError={!projectTypeValid} message={validationMessages.serviceList} />
          </div>
        </div>
        <CheckBox cb={this.toggleServiceListCheck} list={Object.keys(serviceList)} />
        <div className='Form--group-block'>
          <FormGroup 
            type='text'
            label='Describe your project and business.'
            cb={this.updateProjectDescription}
            wide
          >
            <ValidationError hasError={!projectDescriptionValid} message={validationMessages.projectDescription} />
          </FormGroup>
          <FormGroup 
            type='text'
            label='What are your project goals?'
            cb={this.updateProjectGoals}
            wide
          >
            <ValidationError hasError={!projectGoalsValid} message={validationMessages.projectGoals} />
          </FormGroup>
          <FormGroup 
            type='text'
            label='How soon are you looking to launch?'
            cb={this.updateProjectTimeline}
            wide
          >
            <ValidationError hasError={!projectTimelineValid} message={validationMessages.projectTimeline} />
          </FormGroup>
        </div>
        {isSubmitted && 
          <div className='Form--full-width-container'>
            <ValidationError hasError={isSubmitted} message={validationMessages.isSubmitted} />
          </div>
        }
        <div className='Form--full-width-container'>
          <button type="submit" className="Form--button" disabled={!this.state.formValid || this.state.isSubmitted}>
              Submit
          </button>
        </div>
      </form >
    )
  }
}

export default Form;
