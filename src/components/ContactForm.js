import React, { Component } from 'react';
import ContactFormFields from './ContactFormFields.js';

class ContactForm extends Component {

    state = {
        formData:{
            
            name:{
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name',
                    required: 'required',
                    maxLength: 30
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },

            email:{
                element: 'input',
                value: '',
                label: true,
                labelText: 'Email',
                config:{
                    name: 'email_input',
                    type: 'text',
                    placeholder: 'Enter your email address',
                    required: 'required',
                    maxLength: 50
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },

            phone:{
                element: 'input',
                value: '',
                label: true,
                labelText: 'Phone',
                config:{
                    name: 'phone_input',
                    type: 'text',
                    placeholder: 'Enter your phone number',
                    required: 'required',
                    maxLength: 30
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },

            message:{
                element: 'textarea',
                value: '',
                label: true,
                labelText: 'Message',
                config:{
                    name: 'message_input',
                    placeholder: 'Enter your message',
                    required: 'required',
                    maxLength: 600
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateForm = (newState) => {
        this.setState({
            formData:newState
        })
    }

    sendMail = (dataToSubmit) => {

        const request = new Request('http://localhost:3000/', {method: 'POST', body: JSON.stringify(dataToSubmit.message)});
        console.log(request);

        fetch(request)
        .then(response => {
            console.log(response);
        })

        /*
        fetch(request)
        .then(response => {
            if (response.status === 200) {
            return response.json();
            } else {
            throw new Error('Something went wrong on api server!');
            }
        })
        .then(response => {
            console.debug(response);
            // ...
        }).catch(error => {
            console.error(error);
        });
        */

        return dataToSubmit;
    }

    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {};

        for(let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
        }

        console.log(dataToSubmit);
        this.sendMail(dataToSubmit);
    }

    render(){
        return(
            <div className="contactbox">
                <form className="mainform" onSubmit={this.submitForm}>
                    <ContactFormFields
                        formData={this.state.formData}
                        change={(newState) => this.updateForm(newState)}
                    />
                </form>                
            </div>
        )
    }
}

export default ContactForm;