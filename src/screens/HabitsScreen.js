import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SortableListView from 'react-native-sortable-listview';

import { DraggableRow } from '../Components';

const propTypes = {
  habitOrder: PropTypes.arrayOf(PropTypes.string).isRequired
  // ,actionFetchHabits: PropTypes.func.isRequired
};

const defaultProps = {};

class HabitsScreen extends Component {
  // componentDidMount() {
  //   const { actionFetchHabits } = this.props;
  //   actionFetchHabits();
  // }

  render() {
    const { habitOrder } = this.props;
    const data = habitOrder.reduce((map, obj) => {
      return { ...map, [obj]: obj };
    }, {});
    return (
      <SortableListView
        style={{ flex: 1 }}
        data={data}
        order={habitOrder}
        onRowMoved={e => {
          habitOrder.splice(e.to, 0, habitOrder.splice(e.from, 1)[0]);
          this.forceUpdate();
        }}
        renderRow={row => <DraggableRow id={row} />}
      />
    );
  }
}

// note that this converts the object into an array for mapping
const mapStateToProps = state => {
  const { habitOrder } = state;
  return {
    habitOrder
  };
};

export default connect(
  mapStateToProps
  // ,{ actionFetchHabits: fetchHabits }
)(HabitsScreen);

HabitsScreen.propTypes = propTypes;
HabitsScreen.defaultProps = defaultProps;
