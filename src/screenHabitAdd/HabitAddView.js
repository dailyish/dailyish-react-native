import { SafeAreaView, ScrollView, Button, TextInput, Picker, Text } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { addHabit } from '../redux/Habits';
import { changeText } from '../redux/Forms';

const propTypes = {
  actionAddHabit: PropTypes.func.isRequired,
  actionChangeText: PropTypes.func.isRequired,
  habitName: PropTypes.string,
  habitDay: PropTypes.string
};

const defaultProps = { habitName: '', habitDay: 'Tuesday' };

class HabitAddView extends Component {
  onAdd() {
    const { actionAddHabit, actionChangeText, habitName, habitDay } = this.props;
    actionAddHabit({ name: habitName, day: habitDay });
    Actions.pop();
    actionChangeText({ form: 'habitName', value: defaultProps.habitName });
  }

  render() {
    const { habitName, habitDay, actionChangeText } = this.props;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TextInput
            label="Name"
            placeholder="Add Habit"
            value={habitName}
            onChangeText={value => actionChangeText({ form: 'habitName', value })}
          />
          <Text>Day of week</Text>
          <Picker
            selectedValue={habitDay}
            onValueChange={value => actionChangeText({ form: 'habitDay', value })}
          >
            {days.map(day => (
              <Picker.Item label={day} value={day} key={day} />
            ))}
          </Picker>
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
    habitName: forms.habitName,
    habitDay: forms.habitDay
  };
};

export default connect(
  mapStateToProps,
  { actionAddHabit: addHabit, actionChangeText: changeText }
)(HabitAddView);

HabitAddView.propTypes = propTypes;
HabitAddView.defaultProps = defaultProps;
