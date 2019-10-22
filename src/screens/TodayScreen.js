import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { HabitInfoByID } from '../Containers';
import { selectActiveHabitID } from '../Selectors';

// You wouldn't want to pass down the ID here as it will then update
const propTypes = {
  activeHabitID: PropTypes.string
  // ,actionFetchHabits: PropTypes.func.isRequired
};

// TODO: change this to NULL
const defaultProps = { activeHabitID: 'b' };

// TODO: set a loading state and don't show when loading
class TodayScreen extends Component {
  componentDidMount() {}

  render() {
    const { activeHabitID } = this.props;
    return (
      <View>
        <HabitInfoByID id={activeHabitID} expanded />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const activeHabitID = selectActiveHabitID(state);
  return {
    activeHabitID
  };
};

export default connect(
  mapStateToProps
  // { actionFetchHabits: fetchHabits }
)(TodayScreen);

TodayScreen.propTypes = propTypes;
TodayScreen.defaultProps = defaultProps;
