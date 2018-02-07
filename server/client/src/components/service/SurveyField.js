//SurveyField contains a logic to render a single label and text input
import React from 'react';

//since SurveyField rendered by redux-form's Field component, it has his functions under props.
//input is destructured from the props object.
//error and touched are destructured from the meta object
export default ({input, label, meta: {error, touched}}) => {
    return (
        <div>
            <label>{label}</label>
            <input style={{marginBottom: '5px'}} {...input}/>
            <div className="red-text" style={{marginBottom: '20px'}}>{touched && error}</div> 
        </div>
    );
};