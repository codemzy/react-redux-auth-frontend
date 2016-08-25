import React from 'react';
import { connect } from 'react-redux';

// actions
import { fetchProtectedMessage } from '../actions/index.js';

class Feature extends React.Component {
    
    componentWillMount() {
        // get protected content from server
        this.props.dispatch(fetchProtectedMessage());
    }
    
    render() {
        return (
            <div>
                <h1 className="page-title">Feature.</h1>
                <p>This is a feature.</p>
                <p>Protected Message: {this.props.message}</p>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        message: state.message
    };
})(Feature);