import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { HabitSettings } from '../Containers';
import { changeText } from '../redux/Forms';
import { deleteHabit, updateHabit } from '../redux/Habits';

// You wouldn't want to pass down the ID here as it will then update
const propTypes = {
  habit: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired
  }).isRequired,
  actionChangeText: PropTypes.func.isRequired,
  actionDeleteHabit: PropTypes.func.isRequired,
  actionUpdateHabit: PropTypes.func.isRequired,
  name: PropTypes.string,
  day: PropTypes.string
};

const defaultProps = { name: '', day: 'Monday' };

class HabitEditScreen extends Component {
  componentDidMount() {
    const { actionChangeText, habit } = this.props;
    const { name, day } = habit;
    actionChangeText({ form: 'editHabitName', value: name });
    actionChangeText({ form: 'editHabitDay', value: day });
  }

  onDelete() {
    const { actionDeleteHabit, habit } = this.props;
    const { id } = habit;
    actionDeleteHabit({ id });
  }

  onSave() {
    const { actionUpdateHabit, habit, name, day } = this.props;
    const { id } = habit;
    actionUpdateHabit({ id, name, day });
  }

  render() {
    return (
      <View>
        <HabitSettings reducer="edit" />
        <Button title="Save" onPress={() => this.onSave()} />
        <Button title="Delete" onPress={() => this.onDelete()} />
      </View>
    );
  }
}

// note that this converts the object into an array for mapping
const mapStateToProps = (state, ownProps) => {
  const { habit } = ownProps;
  const { forms } = state;
  const { editHabitName, editHabitDay } = forms;
  return {
    habit,
    day: editHabitDay,
    name: editHabitName
  };
};

export default connect(
  mapStateToProps,
  { actionChangeText: changeText, actionDeleteHabit: deleteHabit, actionUpdateHabit: updateHabit }
)(HabitEditScreen);

HabitEditScreen.propTypes = propTypes;
HabitEditScreen.defaultProps = defaultProps;
