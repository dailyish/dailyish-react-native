// Enter actions here
// const FETCH_NEXT_HABIT = 'fetch_next_habit';
const CREATE_HABIT_ORDER = 'create_habit_order';
const UPDATE_HABIT_ORDER = 'update_habit_order';

// Set initial state
const INITIAL_STATE = ['a', 'b'];

// TODO:You should change this to modify state not replace it
// TODO: Lookup changing state order in redux
// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  const newArray = state.slice();
  switch (type) {
    case CREATE_HABIT_ORDER:
      return [...state, payload.id];
    case UPDATE_HABIT_ORDER:
      newArray.splice(payload.e.to, 0, newArray.splice(payload.e.from, 1)[0]);
      return newArray;
    default:
      return state;
  }
}

export function createHabitOrder(id) {
  return {
    type: CREATE_HABIT_ORDER,
    payload: { id }
  };
}

export function updateHabitOrder(e) {
  return {
    type: UPDATE_HABIT_ORDER,
    payload: { e }
  };
}
