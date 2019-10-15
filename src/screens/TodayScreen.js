import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import HabitInfo from './habits/HabitInfo';
import { fetchHabits } from '../Actions';
import { activeHabit } from '../Selectors';

// You wouldn't want to pass down the ID here as it will then update
const propTypes = {
  habit: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string
  }),
  actionFetchHabits: PropTypes.func.isRequired
};

const defaultProps = { habit: { name: 'test', day: 'Monday', id: '1' } };

// TODO: centralize fetching of habits
// TODO: set a loading state and don't show when loading (hard to combine with above)
class TodayScreen extends Component {
  componentDidMount() {
    const { actionFetchHabits } = this.props;
    actionFetchHabits();
  }

  render() {
    const { habit } = this.props;
    return (
      <View>
        <HabitInfo habit={habit} expanded />
      </View>
    );
  }
}

const mapStateToPropsSelector = createStructuredSelector({ habit: activeHabit });

export default connect(
  mapStateToPropsSelector,
  { actionFetchHabits: fetchHabits }
)(TodayScreen);

TodayScreen.propTypes = propTypes;
TodayScreen.defaultProps = defaultProps;
