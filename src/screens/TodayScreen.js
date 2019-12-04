import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { HabitInfoByID } from '../Containers';
import { selectActiveHabitIDs } from '../Selectors';
import { completeHabitOperation } from '../Operations';

// You wouldn't want to pass down the ID here as it will then update
const propTypes = {
  activeHabitID: PropTypes.string
  // ,actionFetchHabits: PropTypes.func.isRequired
};

// TODO: change this to NULL
const defaultProps = { activeHabitID: null };

// TODO: set a loading state and don't show when loading
class TodayScreen extends Component {
  onComplete() {
    // change to lookup based on form name
    const { opCompleteHabit, activeHabitID } = this.props;
    opCompleteHabit(activeHabitID);
  }

  render() {
    const { activeHabitID } = this.props;
    console.log(activeHabitID);
    return (
      <View>
        <HabitInfoByID id={activeHabitID} expanded />
        <Button title="Complete" onPress={() => this.onComplete()} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const activeHabitID = selectActiveHabitIDs(state)[0];
  return {
    activeHabitID
  };
};

export default connect(
  mapStateToProps,
  { opCompleteHabit: completeHabitOperation }
)(TodayScreen);

TodayScreen.propTypes = propTypes;
TodayScreen.defaultProps = defaultProps;
