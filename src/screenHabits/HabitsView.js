import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  habits: PropTypes.arrayOf(PropTypes.object).isRequired
};

const defaultProps = {};

class HabitsScreen extends Component {
  renderHabits() {
    const { habits } = this.props;
    return habits.map(habit => <Text key={habit.name}>{habit.name}</Text>);
  }

  render() {
    return <View>{this.renderHabits()}</View>;
  }
}

// note that this converts the object into an array for mapping
const mapStateToProps = state => {
  const { habits } = state;
  return {
    habits: Object.values(habits)
  };
};

export default connect(
  mapStateToProps,
  {}
)(HabitsScreen);

HabitsScreen.propTypes = propTypes;
HabitsScreen.defaultProps = defaultProps;
