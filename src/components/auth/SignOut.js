import React from 'react';
import { connect } from 'react-redux';

// actions
import { signoutUser } from '../../actions/index.js';

class SignOut extends React.Component {
    
    componentWillMount() {
        this.props.dispatch(signoutUser());
    }
    
    render() {
        return (
            <div>
                <h2>You have signed out. Bye for now...</h2>
            </div>
        );
    }
}

export default connect()(SignOut);