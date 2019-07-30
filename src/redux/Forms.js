// Enter actions here
const CHANGE_HABIT_NAME = 'change_habit_name';

// Set initial state
const INITIAL_STATE = { habitName: '' };

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_HABIT_NAME:
      // make new object - you can't keep the old
      return {
        ...state,
        habitName: action.payload
      };
    default:
      return state;
  }
}

// Action Creators
export function changeHabitName(payload) {
  return {
    type: CHANGE_HABIT_NAME,
    payload
  };
}
