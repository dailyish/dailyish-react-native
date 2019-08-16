import { Actions } from 'react-native-router-flux';
import { habits } from '../utils/Firebase';

// Enter actions here
const FETCH_HABIT_SUCCESS = 'fetch_habit_success';

// Set initial state
const INITIAL_STATE = [];

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_HABIT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export const addHabit = ({ name, day }) => {
  // use firebase.auth to get current user
  return () => {
    habits
      .doc()
      .set({ name, day })
      .then(Actions.pop());
  };
};

export const updateHabit = ({ id, name, day }) => {
  // use firebase.auth to get current user
  return () => {
    habits
      .doc(id)
      .update({ name, day })
      .then(Actions.pop());
  };
};

export const deleteHabit = ({ id }) => {
  // use firebase.auth to get current user
  return () => {
    habits
      .doc(id)
      .delete()
      .then(Actions.pop());
  };
};

// You could do the below by parsing an object instead and mapping in mapStateToProps
export const fetchHabits = () => {
  // use firebase.auth to get current user
  return dispatch => {
    habits.onSnapshot(
      snapshot => {
        dispatch({
          type: FETCH_HABIT_SUCCESS,
          payload: snapshot.docs.map(doc => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          })
        });
      },
      err => {}
    );
  };
};
