import React from 'react';

const ContactFormFields = (props) => {

    const showLabel = (show,label) => {
        return show ?
            <label>{label}</label>
        : null
    }

    const changeHandler = (event,id) => {
        const newState = props.formData;
        newState[id].value = event.target.value;

        let validData = validate(newState[id])
        newState[id].valid = validData[0];
        newState[id].validationMessage = validData[1];

        props.change(newState)
    }

    const validate = (element) => {
        let error = [true,'']

        if(element.validation.required) {
            const valid = element.value.trim() !== '';
            const message = `${ !valid ? 'This field is required' : '' }`
            error = !valid ? [valid,message] : error
        }

        return error;
    }

    /* const showValidation = (data) => {
        let errorMessage = null;

        if(data.validation && !data.validation) {
            errorMessage = (
                <div className="label_error">
                    {data.validationMessage}
                </div>
            )
        }
        return errorMessage;
    } */

    const renderTemplates = (type) => {
        let formTemplate = '';
        let values = type.settings;

        switch(values.element) {

            case('input'):
            formTemplate = (
                <input className="inputbox"
                    {...values.config}
                    value={values.value}
                    onChange={
                        (event) => changeHandler(event,type.id)
                    }
                />
            )
            break;

            case('textarea'):
            formTemplate = (
                <textarea className="textbox"
                    {...values.config}
                    value={values.value}
                    onChange={
                        (event) => changeHandler(event,type.id)
                    }
                />
            )
            break;

            default:
            formTemplate = null
        }
        return formTemplate;
    }

    const renderForm = () => {
        const formArray = [];
        for (let elementName in props.formData) {
            formArray.push({
                id: elementName,
                settings: props.formData[elementName]
            })
        }

        const formFields = formArray.map( (element,i) => {
            return (
                <tr key={i}>
                    <td className="labels">{showLabel(element.settings.label,element.settings.labelText)}</td>
                    <td className="inputs">{renderTemplates(element)}</td>
                </tr>
            )
        });

        return (
            <table className="formtable">
                <tbody>
                    {formFields}
                    <tr>
                        <td>&nbsp;</td>
                        <td><button className="formbutton" stype="submit">Submit</button></td>
                    </tr>
                </tbody>
            </table>
        );
    }

    
    return (
        <div>
            {renderForm()}        
        </div>
    )
}

export default ContactFormFields;