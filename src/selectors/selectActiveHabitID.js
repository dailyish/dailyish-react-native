import { createSelector } from 'reselect';

const habitsSelector = state => state.habits;

// TODO: Replace this with real method for selecting active habit
const selectActiveHabitID = createSelector(
  [habitsSelector],
  habits => 'a'
);

export default selectActiveHabitID;
