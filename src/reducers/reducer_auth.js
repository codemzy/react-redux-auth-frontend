import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

export default function(state = {}, action) {
    if (action.type === AUTH_USER) {
        return {
            ...state,
            authenticated: true
        };
    }
    if (action.type === UNAUTH_USER) {
        return {
            ...state,
            authenticated: false
        };
    }
    if (action.type === UNAUTH_USER) {
        return {
            ...state,
            error: action.payload
        };
    }
    return state;
}