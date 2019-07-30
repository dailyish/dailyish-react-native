// Enter actions here
const CHANGE_TEXT = 'change_text';

// Set initial state
const INITIAL_STATE = { habitName: '', habitDay: 'Monday' };

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      // make new object - you can't keep the old
      return {
        ...state,
        [action.payload.form]: action.payload.value
      };
    default:
      return state;
  }
}

// Action Creators
export function changeText(payload) {
  return {
    type: CHANGE_TEXT,
    payload
  };
}
