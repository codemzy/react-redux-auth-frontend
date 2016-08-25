import React from 'react';
import { reduxForm } from 'redux-form'

// actions
import { signupUser } from '../../actions/index.js';

class Register extends React.Component {
    
    _handleFormSubmit(formProps) {
        // call an action creator to sign up the user
        this.props.signupUser(formProps);
    }
    
    _renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }
    
    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
        return (
            <form onSubmit={handleSubmit(this._handleFormSubmit.bind(this))}>
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
                {this._renderAlert()}
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
}, (state) => {
        return {
            errorMessage: state.auth.error
        };
    }, {signupUser: signupUser})(Register);