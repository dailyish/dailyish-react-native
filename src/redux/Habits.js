// import { Actions } from 'react-native-router-flux';
// import { habits } from '../utils/Firebase';

// const FETCH_HABIT_SUCCESS = 'fetch_habit_success';
const ADD_HABIT = 'add_habit';

// TODO: this should really be an object of id: {id:id, name:name} to allow for easy searching
const INITIAL_STATE = { a: { name: '1', id: 'a' }, b: { name: '2', id: 'b' } };

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // case FETCH_HABIT_SUCCESS:
    //   return action.payload;
    case ADD_HABIT:
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name
        }
      };
    default:
      return state;
  }
}

// TODO: you may want to seperate this even further by doing operations as well
// TODO: Operations are normally 1:1 with actions but can include chained thunks

export function addHabit(payload) {
  return {
    type: ADD_HABIT,
    payload
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

export const updateHabit = ({ id, name, day }) => {
  // use firebase.auth to get current user
  // return () => {
  //   habits
  //     .doc(id)
  //     .update({ name, day })
  //     .then(Actions.pop());
  // };
};

export const deleteHabit = ({ id }) => {
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
