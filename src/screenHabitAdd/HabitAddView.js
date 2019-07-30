import { SafeAreaView, ScrollView, Button, TextInput } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { addHabit } from '../redux/Habits';
import { changeHabitName } from '../redux/Forms';

const propTypes = {
  actionAddHabit: PropTypes.func.isRequired,
  actionChangeHabitName: PropTypes.func.isRequired,
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
    const { actionChangeHabitName } = this.props;
    actionChangeHabitName(habitName);
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
  console.log(forms);
  return {
    habits: Object.values(habits),
    formHabitName: forms.habitName
  };
};

export default connect(
  mapStateToProps,
  { actionAddHabit: addHabit, actionChangeHabitName: changeHabitName }
)(HabitAddView);

HabitAddView.propTypes = propTypes;
HabitAddView.defaultProps = defaultProps;
