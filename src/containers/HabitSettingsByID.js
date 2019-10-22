import { SafeAreaView, ScrollView } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeTextOperation } from '../Operations';
import { Input } from '../Components';
import { makeSelectHabitByID } from '../Selectors';

const propTypes = {
  opChangeText: PropTypes.func.isRequired,
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
    const { opChangeText, habit, reducer } = this.props;
    if (habit) {
      const { name } = habit;
      opChangeText({ form: `${reducer}HabitName`, value: name });
    }
  }

  render() {
    const { habitName, opChangeText, reducer } = this.props;
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Input
            label="Name"
            placeholder="Add Habit"
            value={habitName}
            onChangeText={value => opChangeText({ form: `${reducer}HabitName`, value })}
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
  { opChangeText: changeTextOperation }
)(HabitSettingsByID);

HabitSettingsByID.propTypes = propTypes;
HabitSettingsByID.defaultProps = defaultProps;
