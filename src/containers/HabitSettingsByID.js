import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeText } from '../redux/Forms';
import { Input } from '../Components';

const propTypes = {
  actionChangeText: PropTypes.func.isRequired,
  habitName: PropTypes.string,
  reducer: PropTypes.string.isRequired
};

const defaultProps = { habitName: '' };

const HabitSettingsByID = props => {
  const { habitName, actionChangeText, reducer } = props;
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Input
          label="Name"
          placeholder="Add Habit"
          value={habitName}
          onChangeText={value => actionChangeText({ form: `${reducer}HabitName`, value })}
        />
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
)(HabitSettingsByID);

HabitSettingsByID.propTypes = propTypes;
HabitSettingsByID.defaultProps = defaultProps;
