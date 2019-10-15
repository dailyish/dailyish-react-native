import { combineReducers } from 'redux';
import habits from '../redux/Habits';
import habit from '../redux/Habit';
import forms from '../redux/Forms';

// Redux combines the reducers together
export default combineReducers({
  habits,
  habit,
  forms
});
