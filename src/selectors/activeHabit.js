import { createSelector } from 'reselect';

const habitsSelector = state => state.habits;

const activeHabit = createSelector(
  [habitsSelector],
  habits => {
    return habits[0];
  }
);

export default activeHabit;
