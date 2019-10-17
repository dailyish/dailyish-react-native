import { createSelector } from 'reselect';

const getHabitByID = (state, id) => state.habits[id];

const makeSelectHabitByID = () => {
  return createSelector(
    [getHabitByID],
    habitByID => habitByID
  );
};

export default makeSelectHabitByID;
