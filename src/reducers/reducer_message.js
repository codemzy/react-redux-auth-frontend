import { FETCH_MESSAGE } from '../actions/types';

export default function(state = '', action) {
    if (action.type === FETCH_MESSAGE) {
        return action.payload;
    }
    return state;
}