//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form'; //reduxForm similar to redux connect function
import SurveyField from './SurveyField';
import validEmails from '../../utils/validateEmail';
import FIELDS from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, field => {
            return (
                <Field key={field.name} component={SurveyField} type='text' name={field.name} label={field.label}/>
            ); 
        });
    }

    render () {
        return (
            //this.props.onSurveySubmit() is a callback function that changes component's level state
            //in order to render SurveyFormReview component when user submits the form
            <div>
                <form onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())} >
                    {this.renderFields()}
                    <Link to='/surveys' className='red btn-flat white-text'>
                        Cancel
                    </Link>
                    <button className='teal btn-flat right white-text' type='submit'>
                        Next
                        <i className='material-icons right'>done</i>
                    </button>
                </form>
            </div>
        );
    }
}

//redux-form knows that the form is valid if the error object is empty and vice versa
//redux-form matches the error property to the field with the same name (e.g title)
function validate(values) {
    const errors = {};
    
    errors.recipients = validEmails(values.recipients || '');

    FIELDS.forEach((field) => {
        let name = field.name;
        let errorMsg = field.errorMsg;
        //to figure out the property in runtime we use the square breackets and not the dot.
        if(!values[name]) {
            errors[name] = errorMsg;
        }
    });

    return errors; 
}

//when our app first boots app, validation automaticaly runs one time
export default reduxForm({
    validate: validate, 
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);

//destroyOnUnmount: false 
//keeps the data in the feilds when we press the back button at the SurveyFormReview component
//set to true by default.