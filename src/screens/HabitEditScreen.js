import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { HabitSettingsByID } from '../Containers';
import { deleteHabitOperation, updateHabitNameOperation } from '../Operations';

// You wouldn't want to pass down the ID here as it will then update
const propTypes = {
  id: PropTypes.string.isRequired,
  opDeleteHabit: PropTypes.func.isRequired,
  opUpdateHabitName: PropTypes.func.isRequired,
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
    const { opDeleteHabit, id } = this.props;
    opDeleteHabit({ id });
  }

  onSave() {
    // change to lookup based on form name
    const { opUpdateHabitName, name, id } = this.props;
    opUpdateHabitName({ id, name });
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
  {
    opDeleteHabit: deleteHabitOperation,
    opUpdateHabitName: updateHabitNameOperation
  }
)(HabitEditScreen);

HabitEditScreen.propTypes = propTypes;
HabitEditScreen.defaultProps = defaultProps;
