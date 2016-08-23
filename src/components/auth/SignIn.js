import React from 'react';
import { reduxForm } from 'redux-form';

class SignIn extends React.Component {
    render() {
        return (
            
        );
    }
}



export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(SignIn);