import { combineReducers } from 'redux';
import habits from '../redux/Habits';
import forms from '../redux/Forms';

// Redux combines the reducers together
export default combineReducers({
  habits,
  forms
});
