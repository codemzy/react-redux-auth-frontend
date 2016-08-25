import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// reducers 
import authReducer from './reducer_auth';
import messageReducer from './reducer_message';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  message: messageReducer
});

export default rootReducer;
