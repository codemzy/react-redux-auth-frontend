import React from 'react';
import { reduxForm } from 'redux-form';

class SignIn extends React.Component {
    
    _handleFormSubmit({ email, password }) {
        console.log(email, password);
    }
    
    render() {
        const { handleSubmit, fields: { email, password }} = this.props;
        return (
            <form onSubmit={handleSubmit(this._handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input type="text" className="form-control" {...email} />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" {...password} />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign In</button>
            </form>
        );
    }
}



export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(SignIn);