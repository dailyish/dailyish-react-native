// Enter actions here
const FETCH_NEXT_HABIT = 'fetch_next_habit';

// Set initial state
const INITIAL_STATE = { name: 'test', day: 'Monday' };

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_NEXT_HABIT:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export const fetchNextHabit = () => {
  // use firebase.auth to get current user
  return () => {};
};
