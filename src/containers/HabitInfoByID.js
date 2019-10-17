import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeText } from '../redux/Forms';
import { HabitInfo } from '../Components';
import { makeSelectHabitByID } from '../Selectors';

const propTypes = {
  habit: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }).isRequired
  // id: PropTypes.string.isRequired
};

const defaultProps = {};

const HabitInfoByID = props => {
  const { habit } = props;
  return <HabitInfo habit={habit} />;
};

// note that this converts the object into an array for mapping
// using make settings in reselect makes this memoized for each ID
const makeMapStateToProps = () => {
  const selectHabitByID = makeSelectHabitByID();
  const mapStateToProps = (state, ownProps) => {
    return {
      habit: selectHabitByID(state, ownProps.id)
    };
  };
  return mapStateToProps;
};

export default connect(
  makeMapStateToProps,
  { actionChangeText: changeText }
)(HabitInfoByID);

HabitInfoByID.propTypes = propTypes;
HabitInfoByID.defaultProps = defaultProps;
