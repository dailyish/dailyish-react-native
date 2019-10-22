import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

import { HabitSettingsByID } from '../Containers';
import { addHabitOperation, changeTextOperation } from '../Operations';

// You wouldn't want to pass down the ID here as it will then update
const propTypes = {
  opAddHabitOperation: PropTypes.func.isRequired,
  opChangeText: PropTypes.func.isRequired,
  name: PropTypes.string
};

const defaultProps = { name: '' };

class HabitAddScreen extends Component {
  onAdd() {
    const { opAddHabitOperation, opChangeText, name } = this.props;
    opAddHabitOperation(name);
    opChangeText({ form: 'addHabitName', value: defaultProps.habitName });
    Actions.pop();
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
    opAddHabitOperation: addHabitOperation,
    opChangeText: changeTextOperation
  }
)(HabitAddScreen);

HabitAddScreen.propTypes = propTypes;
HabitAddScreen.defaultProps = defaultProps;
