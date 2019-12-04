import { createSelector } from 'reselect';

import { isToday } from '../Functions';

const habitOrderSelector = state => state.habitOrder;
const habitsSelector = state => state.habits;

// TODO: Replace this with real method for selecting active habit
// TODO: Find out a way to do reset at end of day
const selectActiveHabitIDs = createSelector(
  [habitsSelector, habitOrderSelector],
  (habits, habitOrder) => habitOrder.filter(habitID => !isToday(habits[habitID].completed[0]))
);

export default selectActiveHabitIDs;
