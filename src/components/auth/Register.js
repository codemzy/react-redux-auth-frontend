import React from 'react';
import { reduxForm } from 'redux-form'

// actions
// TODO

class Register extends React.Component {
    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
        return (
            <form>
                <h1 className="page-title">Register.</h1>
                <fieldset className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
                    <label>Email:</label>
                    <input type="text" className="form-control" {...email} />
                    <div className="text-help form-control-label">{email.touched ? email.error : '' }</div>
                </fieldset>
                <fieldset className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
                    <label>Password:</label>
                    <input type="password" className="form-control" {...password} />
                    <div className="text-help form-control-label">{password.touched ? password.error : '' }</div>
                </fieldset>
                <fieldset className={`form-group ${passwordConfirm.touched && passwordConfirm.invalid ? 'has-danger' : ''}`}>
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control" {...passwordConfirm} />
                    <div className="text-help form-control-label">{passwordConfirm.touched ? passwordConfirm.error : '' }</div>
                </fieldset>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        );
    }
}

function validate(formProps) {
    const ERRORS = {};
    if (!formProps.email) {
        ERRORS.email = 'Enter your email address';
    }
    if (!formProps.password) {
        ERRORS.password = 'Enter a password';
    }
    if (!formProps.passwordConfirm) {
        ERRORS.passwordConfirm = 'Confirm your password';
    }
    if (formProps.password !== formProps.passwordConfirm) {
        ERRORS.passwordConfirm = 'Password does not match';
    }
    return ERRORS;
}

export default reduxForm({
    form: 'register',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
})(Register);