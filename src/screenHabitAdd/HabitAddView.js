import { SafeAreaView, ScrollView, Button, TextInput } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { addHabit } from '../redux/Habits';

const propTypes = {
  actionAddHabit: PropTypes.func.isRequired
};

const defaultProps = {};

class HabitAddView extends Component {
  onAdd() {
    const { actionAddHabit } = this.props;
    actionAddHabit({ name: 'drink water' });
    Actions.pop();
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TextInput label="Name" placeholder="Add Habit" />
          <Button title="Add" onPress={() => this.onAdd()} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// note that this converts the object into an array for mapping
const mapStateToProps = state => {
  const { habits } = state;
  return {
    habits: Object.values(habits)
  };
};

export default connect(
  mapStateToProps,
  { actionAddHabit: addHabit }
)(HabitAddView);

HabitAddView.propTypes = propTypes;
HabitAddView.defaultProps = defaultProps;
