import { AUTH_USER, UNAUTH_USER } from '../actions/types';

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
    return state;
}