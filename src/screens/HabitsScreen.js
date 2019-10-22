import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SortableListView from 'react-native-sortable-listview';
import { Actions } from 'react-native-router-flux';

import { DraggableRow } from '../Components';
import { updateHabitOrderOperation } from '../Operations';

const propTypes = {
  habitOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  opUpdateHabitOrder: PropTypes.func.isRequired,
  data: PropTypes.shape().isRequired
};

const defaultProps = {};

class HabitsScreen extends Component {
  componentDidMount() {
    // const { actionFetchHabits } = this.props;
    // const { habitOrder } = this.props;
    // actionFetchHabits();
    // console.log(habitOrder);
  }

  onChange(e) {
    const { opUpdateHabitOrder } = this.props;
    // this.forceUpdate();
    opUpdateHabitOrder(e);
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
  { opUpdateHabitOrder: updateHabitOrderOperation }
)(HabitsScreen);

HabitsScreen.propTypes = propTypes;
HabitsScreen.defaultProps = defaultProps;
