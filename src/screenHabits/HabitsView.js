import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchHabits } from '../redux/Habits';

const propTypes = {
  habits: PropTypes.arrayOf(PropTypes.object).isRequired,
  actionFetchHabits: PropTypes.func.isRequired
};

const defaultProps = {};

class HabitsScreen extends Component {
  componentDidMount() {
    const { actionFetchHabits } = this.props;
    actionFetchHabits();
  }

  renderHabits() {
    const { habits } = this.props;
    if (habits.length) {
      return habits.map(habit => <Text key={habit.name}>{habit.name}</Text>);
    }
    return false;
  }

  render() {
    return <View>{this.renderHabits()}</View>;
  }
}

// note that this converts the object into an array for mapping
const mapStateToProps = state => {
  const { habits } = state;
  return {
    habits
  };
};

export default connect(
  mapStateToProps,
  { actionFetchHabits: fetchHabits }
)(HabitsScreen);

HabitsScreen.propTypes = propTypes;
HabitsScreen.defaultProps = defaultProps;
