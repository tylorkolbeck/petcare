import React, { Component } from 'react'
import './Contact.css'
import axios from 'axios'

import Input from '../../Components/UI/Input/Input'

class Contact extends Component {
  state = {
    submitted: false,
    subittedError: false,
    validForm: false,
    contactForm: {

      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'NAME'
        },
        value: '',
        validation: {
          required: true,
          minLength: 1
        },
        valid: false,
        touched: false
      },

      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'EMAIL'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5
        },
        valid: false,
        touched: false
      },

      subject: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'SUBJECT'
        },
        value: '',
        validation: {
          required: true,
          minLength: 2
        },
        valid: false,
        touched: false
      },

      message: {
        elementType: 'textarea',
        elementConfig: {
          type: 'text',
          placeholder: 'TELL ME MORE!'
        },
        value: '',
        validation: {
          required: true,
          minLength: 2,
          maxLength: 300
        },
        valid: false,
        touched: false
      },
    },
    formIsValid: false,
    loading: false,

  }

  validate(value, rules) {
    // return true or false wether it is valid or not
    let isValid = true
    if (rules.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }

    return isValid
  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({loading: true})

    const formData = {}
    for (let elementId in this.state.contactForm) {
      formData[elementId] = this.state.contactForm[elementId].value
    }

    // console.log(formData)

    axios.post('https://mail.jenniferinglepetcare.com/send', formData)
    // axios.post('http://localhost:5000/send', formData) // LOCAL TESTING ONLY

    .then((response) => {
      console.log('MESSAGE SENT - ')
      console.log(response)
      if (response.data.success) {
        console.log('MESSAGE SUCCESS-', response)
        this.setState({submitted: true, submittedError: false})
      }
    })

    .catch((error) => {
      console.log('MESSAGE ERROR- ', error)
      this.setState({submitted: true})
    })

  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.contactForm
    }
    const updatedFormEl = {
      ...updatedForm[inputIdentifier]
    }

    updatedFormEl.value = event.target.value
    updatedForm[inputIdentifier] = updatedFormEl
    updatedForm[inputIdentifier].valid = this.validate(updatedFormEl.value, updatedFormEl.validation)
    updatedFormEl.touched = true

    let formIsValid = true
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid
    }

    this.setState({contactForm: updatedForm, formIsValid: formIsValid})
  }

  render() {
    let formSubmissionSuccess = this.state.submitted ? <p className="Contact_form_success">Your message has been submitted.</p> : null
    let submissionError = this.state.subittedError ? <p className="Contact__error">There was an error submitting your request.  Please email directly to jenniferingle4petcare@gmail.com</p> : null
    let errorMessage = <p> </p>
    let contactForm = null

    if (!this.state.formIsValid) {
      errorMessage = <p className="invalidMessage">* Please fill in all required fields.</p>
    }
    const formElementsArray = []

    for (let key in this.state.contactForm) {
      formElementsArray.push({
        id: key,
        config: this.state.contactForm[key]
      })
    }

    if (!this.state.submitted) {

      contactForm = (
        <div className="Contact__input_container">

        {errorMessage}
      
        <form onSubmit={this.orderHandler}>
          {formElementsArray.map(el => (
            <Input 
              key={el.id} 
              elementType={el.config.elementType} 
              elementConfig={el.config.elementConfig} 
              value={el.config.value} 
              changed={(event) => this.inputChangedHandler(event, el.id)}
              invalid={!el.config.valid}
              shouldValidate={el.config.validation}
              touched={el.config.touched}
              />
          ))}
          <button disabled={!this.state.formIsValid}><span>SUBMIT</span></button>
        </form>
      </div>
      )
    }


    



    window.scrollTo(0, 0)
    return (
      <div className="Contact__container">

        <h1>SAY HELLO!</h1>
        <p>
          Do you have questions, comments or suggestions? Please complete the form below and I will be sure to respond within a timely manner.
        </p>
        <div className="Contact__business_hours">
          <p>Also available by phone (call or text) </p>
          <p><span style={{fontWeight: 'bold'}}>Monday-Friday:</span> 8:00am - 6:00pm</p>
          <p><span style={{fontWeight: 'bold'}}>Saturday-Sunday:</span> 10:00am - 4:00pm</p>
          <p>904-404-6207</p>
        </div>

        {/* Display form if a form has not been submitted */}
        {contactForm}

        {/* Display Success if form is good  */}
        {formSubmissionSuccess}

        {/* Display an error if there is a form submission error */}
        {submissionError}


        {/* <div className="Contact__input_container">
          {errorMessage}
          <form onSubmit={this.orderHandler}>
            {formElementsArray.map(el => (
              <Input 
                key={el.id} 
                elementType={el.config.elementType} 
                elementConfig={el.config.elementConfig} 
                value={el.config.value} 
                changed={(event) => this.inputChangedHandler(event, el.id)}
                invalid={!el.config.valid}
                shouldValidate={el.config.validation}
                touched={el.config.touched}
                />
            ))}
            <button disabled={!this.state.formIsValid}><span>SUBMIT</span></button>
          </form>
        </div> */}
        
      </div>
    )
  }
}

export default Contact