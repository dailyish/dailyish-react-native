// Enter actions here
// const FETCH_NEXT_HABIT = 'fetch_next_habit';
const ADD_HABIT_TO_ORDER = 'add_habit_to_order';
const UPDATE_HABIT_ORDER = 'update_habit_order';
const DELETE_HABIT_IN_ORDER = 'delete_habit_in_order';

// Set initial state
const INITIAL_STATE = ['a', 'b'];

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  const newArray = state.slice();
  switch (type) {
    case ADD_HABIT_TO_ORDER:
      return [...state, payload.id];
    case UPDATE_HABIT_ORDER:
      newArray.splice(payload.e.to, 0, newArray.splice(payload.e.from, 1)[0]);
      return newArray;
    case DELETE_HABIT_IN_ORDER:
      return [...state, payload.id];
    default:
      return state;
  }
}

export function addHabitToOrder(id) {
  return {
    type: ADD_HABIT_TO_ORDER,
    payload: { id }
  };
}

export function updateHabitOrder(e) {
  return {
    type: UPDATE_HABIT_ORDER,
    payload: { e }
  };
}

export function deleteHabitInOrder(id) {
  return {
    type: DELETE_HABIT_IN_ORDER,
    payload: { id }
  };
}
