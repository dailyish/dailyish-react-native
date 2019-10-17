import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { HabitSettingsByID } from '../Containers';
import { addHabit, changeText } from '../Actions';

// You wouldn't want to pass down the ID here as it will then update
const propTypes = {
  actionAddHabit: PropTypes.func.isRequired,
  actionChangeText: PropTypes.func.isRequired,
  name: PropTypes.string
};

const defaultProps = { name: '' };

class HabitAddScreen extends Component {
  onAdd() {
    const { actionAddHabit, actionChangeText, name } = this.props;
    actionAddHabit(name);
    actionChangeText({ form: 'addHabitName', value: defaultProps.habitName });
  }

  render() {
    return (
      <View>
        <HabitSettingsByID reducer="add" />
        <Button title="Add Habit" onPress={() => this.onAdd()} />
      </View>
    );
  }
}

// note that this converts the object into an array for mapping
const mapStateToProps = state => {
  const { forms } = state;

  return {
    name: forms.addHabitName,
    day: forms.addHabitDay
  };
};

export default connect(
  mapStateToProps,
  { actionAddHabit: addHabit, actionChangeText: changeText }
)(HabitAddScreen);

HabitAddScreen.propTypes = propTypes;
HabitAddScreen.defaultProps = defaultProps;
