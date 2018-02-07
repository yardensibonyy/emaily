const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
    const invalidEmails = emails
        .split(',')
        .map((email) => email.trim())
        .filter((email) => email.length && re.test(email) === false); //a regex failure means invalid email address

    if(invalidEmails.length) {
        return `These Emails are invalid: ${invalidEmails}`;
    }
    return;
}; 