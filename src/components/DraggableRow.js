import React from 'react';
import { TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { HabitInfoByID } from '../Containers';

const DraggableRow = props => {
  const { id, sortHandlers } = props;
  return (
    <TouchableHighlight
      underlayColor="#eee"
      style={{
        padding: 25,
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 1,
        borderColor: '#eee'
      }}
      {...sortHandlers}
    >
      <HabitInfoByID id={id} />
    </TouchableHighlight>
  );
};

const propTypes = {
  id: PropTypes.string.isRequired,
  sortHandlers: PropTypes.shape({
    onLongPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func
  })
};

const defaultProps = { sortHandlers: {} };

export default DraggableRow;

DraggableRow.propTypes = propTypes;
DraggableRow.defaultProps = defaultProps;
