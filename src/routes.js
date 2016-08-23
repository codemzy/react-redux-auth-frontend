import React from 'react';
import { Route, IndexRoute } from 'react-router';

// components
import App from './components/app';
import SignIn from './components/auth/SignIn';


export default (
    <Route path='/' component={App}>
        <Route path="/signin" component={SignIn} />
    </Route>
);