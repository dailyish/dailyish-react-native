import uuid from 'uuid';

import { createHabitOrder, createHabitObject } from '../Actions';

export function createHabitOperation(name) {
  const id = uuid.v4();
  return dispatch => {
    dispatch(createHabitObject(name, id));
    dispatch(createHabitOrder(id));
  };
  // If you are going to put firestore operations in here rather than seperating out ...
  // ... You can do return dispacth => {} to not update state
}

export function deleteHabitOperation(id) {
  // delete operation
}
