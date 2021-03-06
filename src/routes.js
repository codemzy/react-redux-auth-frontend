import React from 'react';
import { Route, IndexRoute } from 'react-router';

// components
import App from './components/app';
import Home from './components/Home';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import Register from './components/auth/Register';
import Feature from './components/Feature';

// higher order component
import requireAuth from './components/auth/RequireAuth';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/register" component={Register} />
        <Route path="/feature" component={requireAuth(Feature)} />
    </Route>
);