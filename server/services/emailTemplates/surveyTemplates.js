const keys = require('../../config/keys');

//returns the emails body
module.exports = (survey) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>I'd like your input</h3>
                    <p>Please enter the following question:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.domain}/api/surveys/${survey.id}/yes">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.domain}/api/surveys/${survey.id}/no">No</a>
                    </div>
                </div>
            </body>
        </html>
    `; 
};
