import { users } from '../Firebase';

// Enter actions here
const ADD_HABIT = 'add_deck';

// Set initial state
const INITIAL_STATE = { meditate: { name: 'meditate', day: 'Monday' } };

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
    default:
      return state;
  }
}

// Action Creators
export const addHabit = ({ name }) => {
  // use firebase.auth to get current user
  const currentUser = 'RlI8d22aHgR2yZWgx9sb';
  return () => {
    users
      .doc(currentUser)
      .collection('habits')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          alert(doc.id, '=>', doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  };
};
