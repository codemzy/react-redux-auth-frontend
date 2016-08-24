import React from 'react';
import { reduxForm } from 'redux-form';

import { signinUser } from '../../actions/index.js';

class SignIn extends React.Component {
    
    _handleFormSubmit({ email, password }) {
        console.log(email, password);
        this.props.dispatch(signinUser({ email, password }));
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
                {this._renderAlert()}
                <button action="submit" className="btn btn-primary">Sign In</button>
            </form>
        );
    }
}



export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, (state) => {
        return {
            errorMessage: state.auth.error
        };
    })(SignIn);