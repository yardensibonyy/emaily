//SurveyNew shows surveForm and surveyFormReview 
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';  
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = {showFormReview: false} //-> equivalent 4 lines below
    // constructor(props) {
    //     super(props);

    //     //component level state
    //     this.state = {showFormReview: false};
    // }

    renderContent() {
        if(this.state.showFormReview) {
            return <SurveyFormReview onCancel={() => this.setState({showFormReview: false})} />;
        }  
        return <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})} />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

//delete the form values when user's going out of the form (not to the review component)
//since it's the default behavior of redux-form. 
//to prevent it - we'll use (destroyOnUnmount: false) property like we did in SurveyForm component
export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);
