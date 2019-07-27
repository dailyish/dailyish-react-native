// Enter actions here
const ADD_HABIT = 'add_deck';

// Set initial state
const INITIAL_STATE = { meditate: { name: 'meditate' } };

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_HABIT:
      // make new object - you can't keep the old
      return {
        ...state,
        [action.payload.name]: {
          name: action.payload.name
        }
      };
    default:
      return state;
  }
}

// Action Creators
export function addHabit(payload) {
  return {
    type: ADD_HABIT,
    payload
  };
}
