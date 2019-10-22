import { SafeAreaView, ScrollView } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeText } from '../Actions';
import { Input } from '../Components';
import { makeSelectHabitByID } from '../Selectors';

const propTypes = {
  actionChangeText: PropTypes.func.isRequired,
  habitName: PropTypes.string,
  reducer: PropTypes.string.isRequired,
  habit: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })
};

const defaultProps = { habitName: '', habit: null };

class HabitSettingsByID extends Component {
  componentDidMount() {
    const { actionChangeText, habit, reducer } = this.props;
    if (habit) {
      const { name } = habit;
      actionChangeText({ form: `${reducer}HabitName`, value: name });
    }
  }

  render() {
    const { habitName, actionChangeText, reducer } = this.props;
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
  }
}

// note that this converts the object into an array for mapping
const makeMapStateToProps = () => {
  const selectHabitByID = makeSelectHabitByID();
  const mapStateToProps = (state, ownProps) => {
    const { forms } = state;
    const { reducer, id } = ownProps;
    return {
      habitName: forms[`${reducer}HabitName`],
      habitDay: forms[`${reducer}HabitDay`],
      habit: selectHabitByID(state, id)
    };
  };
  return mapStateToProps;
};

export default connect(
  makeMapStateToProps,
  { actionChangeText: changeText }
)(HabitSettingsByID);

HabitSettingsByID.propTypes = propTypes;
HabitSettingsByID.defaultProps = defaultProps;
