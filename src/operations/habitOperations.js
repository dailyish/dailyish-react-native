import uuid from 'uuid';

import { addHabitToObject, updateHabitName, deleteHabitInObject } from '../redux/Habits';
import { addHabitToOrder, updateHabitOrder, deleteHabitInOrder } from '../redux/HabitOrder';

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
