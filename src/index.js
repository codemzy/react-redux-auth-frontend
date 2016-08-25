import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
/* global localStorage */

// action type
import { AUTH_USER } from './actions/types';

// routes
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// reducers
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// if we have a token consider the user to be signed in
if (token) {
  // TODO check if token is valid https://thinkster.io/angularjs-jwt-auth
  // update the application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.app-wrap'));
