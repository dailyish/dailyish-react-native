// TODO: Work out why it is crashing on habitEdit
// TODO: You should change habitOrder to persist in an operation and therefore into redux

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SortableListView from 'react-native-sortable-listview';
import { Actions } from 'react-native-router-flux';

import { DraggableRow } from '../Components';
import { updateHabitOrder } from '../Actions';

const propTypes = {
  habitOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  actionUpdateHabitOrder: PropTypes.func.isRequired
};

const defaultProps = {};

class HabitsScreen extends Component {
  componentDidMount() {
    // const { actionFetchHabits } = this.props;
    // const { habitOrder } = this.props;
    // actionFetchHabits();
    // console.log(habitOrder);
  }

  // TODO: Move the reordering logic to follow https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
  onChange(e) {
    const { actionUpdateHabitOrder } = this.props;
    // this.forceUpdate();
    actionUpdateHabitOrder(e);
  }

  render() {
    const { habitOrder, data } = this.props;
    return (
      <SortableListView
        style={{ flex: 1 }}
        data={data}
        order={habitOrder}
        onRowMoved={e => {
          this.onChange(e);
        }}
        renderRow={row => (
          <DraggableRow
            id={row}
            onPress={() => {
              Actions.habitEdit({ id: row });
            }}
          />
        )}
      />
    );
  }
}

// note that this converts the object into an array for mapping
const mapStateToProps = state => {
  const { habitOrder } = state;
  return {
    habitOrder,
    data: habitOrder.reduce((map, obj) => {
      return { ...map, [obj]: obj };
    }, {})
  };
};

export default connect(
  mapStateToProps,
  { actionUpdateHabitOrder: updateHabitOrder }
)(HabitsScreen);

HabitsScreen.propTypes = propTypes;
HabitsScreen.defaultProps = defaultProps;
