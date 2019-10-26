// import { Actions } from 'react-native-router-flux';
// import { habits } from '../utils/Firebase';

// const FETCH_HABIT_SUCCESS = 'fetch_habit_success';
const ADD_HABIT_TO_OBJECT = 'add_habit_to_object';
const DELETE_HABIT_IN_OBJECT = 'delete_habit_in_object';

const INITIAL_STATE = { a: { name: '1', id: 'a' }, b: { name: '2', id: 'b' } };

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    // case FETCH_HABIT_SUCCESS:
    //   return action.payload;
    case ADD_HABIT_TO_OBJECT:
      return {
        ...state,
        [payload.id]: {
          id: payload.id,
          name: payload.name
        }
      };
    case DELETE_HABIT_IN_OBJECT:
      return Object.keys(state).reduce((object, key) => {
        const newObject = object;
        if (key !== payload.id) {
          newObject[key] = state[key];
        }
        return newObject;
      }, {});
    default:
      return state;
  }
}

export function addHabitToObject(name, id) {
  return {
    type: ADD_HABIT_TO_OBJECT,
    payload: { name, id }
  };
}

// You could do the below by parsing an object instead and mapping in mapStateToProps
// export const addHabit = ({ name }) => {

// use firebase.auth to get current user
// return () => {
//   habits
//     .doc()
//     .set({ name, day })
//     .then(Actions.pop());
// };
// };

export const updateHabitName = ({ id, name, day }) => {
  // use firebase.auth to get current user
  // return () => {
  //   habits
  //     .doc(id)
  //     .update({ name, day })
  //     .then(Actions.pop());
  // };
};

export const deleteHabitInObject = ({ id }) => {
  return {
    type: DELETE_HABIT_IN_OBJECT,
    payload: { id }
  };
  // use firebase.auth to get current user
  // return () => {
  //   habits
  //     .doc(id)
  //     .delete()
  //     .then(Actions.pop());
  // };
};

// You could do the below by parsing an object instead and mapping in mapStateToProps
// export const fetchHabits = () => {
//   // use firebase.auth to get current user
//   return dispatch => {
//     habits.onSnapshot(
//       snapshot => {
//         dispatch({
//           type: FETCH_HABIT_SUCCESS,
//           payload: snapshot.docs.map(doc => {
//             const data = doc.data();
//             data.id = doc.id;
//             return data;
//           })
//         });
//       },
//       err => {}
//     );
//   };
// };
