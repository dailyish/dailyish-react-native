// TODO: Change this to pass ID to settings

import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { HabitSettingsByID } from '../Containers';
import { deleteHabit, updateHabit, changeText } from '../Actions';

// You wouldn't want to pass down the ID here as it will then update
const propTypes = {
  id: PropTypes.string.isRequired,
  actionDeleteHabit: PropTypes.func.isRequired,
  actionUpdateHabit: PropTypes.func.isRequired,
  name: PropTypes.string
};

const defaultProps = { name: '' };

class HabitEditScreen extends Component {
  componentDidMount() {
    // const { actionChangeText, habit } = this.props;
    // const { name } = habit;
    // actionChangeText({ form: 'editHabitName', value: name });
  }

  onDelete() {
    const { actionDeleteHabit, id } = this.props;
    actionDeleteHabit({ id });
  }

  onSave() {
    // change to lookup based on form name
    const { actionUpdateHabit, name, id } = this.props;
    actionUpdateHabit({ id, name });
  }

  render() {
    const { id } = this.props;
    return (
      <View>
        <HabitSettingsByID reducer="edit" id={id} />
        <Button title="Save" onPress={() => this.onSave()} />
        <Button title="Delete" onPress={() => this.onDelete()} />
      </View>
    );
  }
}

// note that this converts the object into an array for mapping
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const { forms } = state;
  const { editHabitName, editHabitDay } = forms;
  return {
    id,
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
