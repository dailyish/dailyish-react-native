import { SafeAreaView, ScrollView, Picker, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeText } from '../redux/Forms';
import { Input } from '../Components';

const propTypes = {
  actionChangeText: PropTypes.func.isRequired,
  habitName: PropTypes.string,
  habitDay: PropTypes.string,
  reducer: PropTypes.string.isRequired
};

const defaultProps = { habitName: '', habitDay: 'Tuesday' };

const HabitSettings = props => {
  const { habitName, habitDay, actionChangeText, reducer } = props;
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Input
          label="Name"
          placeholder="Add Habit"
          value={habitName}
          onChangeText={value => actionChangeText({ form: `${reducer}HabitName`, value })}
        />
        <Text>Day of week</Text>
        <Picker
          selectedValue={habitDay}
          onValueChange={value => actionChangeText({ form: `${reducer}HabitDay`, value })}
        >
          {days.map(day => (
            <Picker.Item label={day} value={day} key={day} />
          ))}
        </Picker>
      </ScrollView>
    </SafeAreaView>
  );
};

// note that this converts the object into an array for mapping
const mapStateToProps = (state, ownProps) => {
  const { forms } = state;
  const { reducer } = ownProps;
  return {
    habitName: forms[`${reducer}HabitName`],
    habitDay: forms[`${reducer}HabitDay`]
  };
};

export default connect(
  mapStateToProps,
  { actionChangeText: changeText }
)(HabitSettings);

HabitSettings.propTypes = propTypes;
HabitSettings.defaultProps = defaultProps;
