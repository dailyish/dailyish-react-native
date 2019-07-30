import { SafeAreaView, ScrollView, Button, TextInput } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { addHabit } from '../redux/Habits';
import { changeText } from '../redux/Forms';

const propTypes = {
  actionAddHabit: PropTypes.func.isRequired,
  actionChangeText: PropTypes.func.isRequired,
  formHabitName: PropTypes.string.isRequired
};

const defaultProps = {};

class HabitAddView extends Component {
  onAdd() {
    const { actionAddHabit, formHabitName } = this.props;
    actionAddHabit({ name: formHabitName });
    Actions.pop();
  }

  onChange = habitName => {
    const { actionChangeText } = this.props;
    actionChangeText({ form: 'habitName', value: habitName });
  };

  render() {
    const { formHabitName } = this.props;
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TextInput
            label="Name"
            placeholder="Add Habit"
            value={formHabitName}
            onChangeText={habitName => this.onChange(habitName)}
          />
          <Button title="Add" onPress={() => this.onAdd()} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// note that this converts the object into an array for mapping
const mapStateToProps = state => {
  const { habits, forms } = state;
  return {
    habits: Object.values(habits),
    formHabitName: forms.habitName
  };
};

export default connect(
  mapStateToProps,
  { actionAddHabit: addHabit, actionChangeText: changeText }
)(HabitAddView);

HabitAddView.propTypes = propTypes;
HabitAddView.defaultProps = defaultProps;
