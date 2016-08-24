import axios from 'axios';

const ROOT_URL = 'https://node-jwt-auth-api-codemzy.c9users.io';

export function signinUser({email, password}) {
    // with redux thunk we can return a function from our action creator
    return function(dispatch) {
        
        // submit email and password to the api server
        axios.post(ROOT_URL + '/signin', { email, password });
        // if request is good update state to indicate user is authenticated
        
        // save JWT token
        
        // redirect to the route '/feature'
        
        // if request is bad show an error to the user
        
    };
}