import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import TodayScreen from '../ScreenToday/TodayScreen';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="route">
        <Scene key="today" component={TodayScreen} title="Today" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
