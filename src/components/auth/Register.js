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
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input type="text" className="form-control" {...email} />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" {...password} />
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control" {...passwordConfirm} />
                </fieldset>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'register',
    fields: ['email', 'password', 'passwordConfirm']
})(Register);