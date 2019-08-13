import { FlatList } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fetchHabits } from '../../redux/Habits';
import HabitInfo from './HabitInfo';

const MainFlatList = styled.FlatList`
  margin-top: 16px;
`;

const propTypes = {
  habits: PropTypes.arrayOf(PropTypes.object).isRequired,
  actionFetchHabits: PropTypes.func.isRequired
};

const defaultProps = {};

// TODO: Really should have this fetched from the beginning maybe in App.js
class HabitsScreen extends Component {
  componentDidMount() {
    const { actionFetchHabits } = this.props;
    actionFetchHabits();
  }

  render() {
    const { habits } = this.props;
    return <MainFlatList data={habits} renderItem={({ item }) => <HabitInfo habit={item} />} />;
  }
}

// note that this converts the object into an array for mapping
const mapStateToProps = state => {
  const { habits } = state;
  return {
    habits
  };
};

export default connect(
  mapStateToProps,
  { actionFetchHabits: fetchHabits }
)(HabitsScreen);

HabitsScreen.propTypes = propTypes;
HabitsScreen.defaultProps = defaultProps;
