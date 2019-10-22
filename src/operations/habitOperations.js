import uuid from 'uuid';

import {
  addHabitToObject,
  addHabitToOrder,
  updateHabitOrder,
  updateHabitName,
  deleteHabitInObject,
  deleteHabitInOrder
} from '../Actions';

export { updateHabitOrder as updateHabitOrderOperation };
export { updateHabitName as updateHabitNameOperation };

export function addHabitOperation(name) {
  const id = uuid.v4();
  return dispatch => {
    dispatch(addHabitToObject(name, id));
    dispatch(addHabitToOrder(id));
  };
  // If you are going to put firestore operations in here rather than seperating out ...
  // ... You can do return dispacth => {} to not update state
}

export function deleteHabitOperation(id) {
  return dispatch => {
    dispatch(deleteHabitInObject(id));
    dispatch(deleteHabitInOrder(id));
  };
}
