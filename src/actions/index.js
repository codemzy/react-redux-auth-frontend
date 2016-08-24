import axios from 'axios';
import { browserHistory } from 'react-router';
/* global localStorage */

// action types
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'https://node-jwt-auth-api-codemzy.c9users.io';

export function signinUser({email, password}) {
    // with redux thunk we can return a function from our action creator
    return function(dispatch) {
        // submit email and password to the api server
        axios.post(ROOT_URL + '/signin', { email, password })
            .then((response) => {
                // if request is good update state to indicate user is authenticated (dispatch action)
                dispatch({ type: AUTH_USER });
                // save JWT token to localStorage
                localStorage.setItem('token', response.data.token);
                // redirect to the route '/feature' using react router
                browserHistory.push('/feature');
            })
            .catch(() => {
                // if request is bad show an error to the user
                dispatch(authError('Invalid login info'));
            });
        
    };
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}