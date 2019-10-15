import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { HabitSettings } from '../Containers';
import { changeText } from '../redux/Forms';
import { addHabit } from '../Actions';

// You wouldn't want to pass down the ID here as it will then update
const propTypes = {
  actionAddHabit: PropTypes.func.isRequired,
  actionChangeText: PropTypes.func.isRequired,
  name: PropTypes.string,
  day: PropTypes.string
};

const defaultProps = { name: '', day: 'Tuesday' };

class HabitAddScreen extends Component {
  onAdd() {
    const { actionAddHabit, actionChangeText, name, day } = this.props;
    actionAddHabit({ name, day });
    actionChangeText({ form: 'addHabitName', value: defaultProps.habitName });
  }

  render() {
    return (
      <View>
        <HabitSettings reducer="add" />
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
