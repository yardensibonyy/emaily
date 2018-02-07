import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FIELDS from './formFields';
import * as actions from '../../actions/index';

const SurveyFormReview = (props) => {
    const reviewFields = _.map(FIELDS, field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>{props.formValues[field.name]}</div>
            </div>
        ); 
    });

    return (
        <div>
            <h5>Please confirm your entries.</h5>
            {reviewFields}
            <br/>
            <button
                className='yellow btn-flat darken-3' 
                onClick={props.onCancel}>
                Back
            </button>
            <button
                className='green btn-flat right white-text' 
                onClick={() => props.submitSurvey(props.formValues, props.history) }>
                Send Survey
                <i className='material-icons right'>email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
//withRouter(SurveyFormReview) passes match, location and history as props 