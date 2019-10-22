import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { HabitSettingsByID } from '../Containers';
import { changeText, createHabitObject, createHabitOrder } from '../Actions';
import { createHabitOperation } from '../Operations';

// You wouldn't want to pass down the ID here as it will then update
const propTypes = {
  actionCreateHabitOperation: PropTypes.func.isRequired,
  actionChangeText: PropTypes.func.isRequired,
  name: PropTypes.string
};

const defaultProps = { name: '' };

// TODO: move to singular operator
class HabitAddScreen extends Component {
  onAdd() {
    const { actionCreateHabitOperation, actionChangeText, name } = this.props;
    actionCreateHabitOperation(name);
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

// the mapDispatchToProps function here is basically wrapping within dispatch to make sure it sends to the reducers
export default connect(
  mapStateToProps,
  {
    actionCreateHabitObject: createHabitObject,
    actionCreateHabitOrder: createHabitOrder,
    actionCreateHabitOperation: createHabitOperation,
    actionChangeText: changeText
  }
)(HabitAddScreen);

HabitAddScreen.propTypes = propTypes;
HabitAddScreen.defaultProps = defaultProps;
