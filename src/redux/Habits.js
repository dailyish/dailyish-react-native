import { Actions } from 'react-native-router-flux';
import { habits } from '../Firebase';

// Enter actions here
const ADD_HABIT = 'add_habit';
const FETCH_HABIT_SUCCESS = 'fetch_habit_success';

// Set initial state
const INITIAL_STATE = [];

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_HABIT:
      // make new object - you can't keep the old
      return {
        ...state,
        [action.payload.name]: {
          name: action.payload.name,
          day: action.payload.day
        }
      };
    case FETCH_HABIT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export const addHabit = ({ name }) => {
  // use firebase.auth to get current user
  return () => {
    habits
      .doc(name)
      .set({ name })
      .then(Actions.pop());
  };
};

export const fetchHabits = () => {
  // use firebase.auth to get current user
  return dispatch => {
    habits
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        dispatch({ type: FETCH_HABIT_SUCCESS, payload: snapshot.docs.map(doc => doc.data()) });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  };
};
